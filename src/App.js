import React from 'react';
import Header from './Header';
import Login from './Login';
import Feed from './Feed';
import Widgets from'./Widgets';
import {auth} from "./firebase"
import './App.css';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
// import { useSelect } from '@mui/base';
import {useDispatch, useSelector} from 'react-redux'
import { login,logout, selectUser } from './features/userSlice';
function App() {

  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,

        }))
        //logged in
      }else{
        dispatch(logout());
        // logged out
      }
    })
  },[]);
  
  return (
    <div className="App">
      <Header />

      {
        !user ? <Login /> : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )
      }


    </div>)

}

export default App;
