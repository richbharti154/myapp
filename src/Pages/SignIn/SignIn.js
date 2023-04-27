import React from 'react'
import{useState,useEffect} from 'react'
import {auth ,signInWithGoogle } from "../../Atom/firebase";
import { useNavigate } from 'react-router-dom';
import page from '../../Pages/SignIn/SignIn.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Custominput from '../../Atom/Custominput/Custominput'
import Custombutton from '../../Atom/Custombutton/Custombutton'
export default function SignIn() {
    const [user, setUser] = useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let nevigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((users) => {
      setUser(users);
    });

    return unsubscribe;
  }, []);

  const signOutWithGoogle = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  function handlesubmit() {
    
    if(user != null && email != null  && password != null){
      alert("welcome ");
      nevigate("/Home");
    }
   
  }
    return (
       
        <div className={page.Container}>
        <div className={page.leftSection}>
             <h1>Board</h1>
        </div>
        <div className={page.rightSection}>
            <div className={page.signin}>
              <h1 className={page.sign}>Sign In</h1>
             <h4 className={page.account}>Sign in to your account</h4>
            </div>
            <div className={page.mainButton}>
            {user === null ? (
            <Custombutton text="Sign in with Google" icon={<FcGoogle />} className={page.gbtn} onClick={signInWithGoogle} />
          ) : (
            <Custombutton text="Sign out from Google" icon={<FcGoogle />} className={page.gbtn} onClick={signOutWithGoogle} />
          )}

                <Custombutton text='Sign in with Apple' icon={<BsApple/>} className={page.gbtn}/>
            </div>
            <div className={page.mainInput}>
                <h4>Email address</h4>
                <Custominput type="email" placeholder="Email" className={page.input} />
                <h4>Password</h4>
                <Custominput type="password" placeholder="Password" className={page.input} />
                <h4>Forgot Password</h4>
                <Custombutton text='Sign In'  className={page.sbtn}/>
                
            </div>
            <div>
                <p>Don't have an account? <a href='/'>Register here</a> </p>
            </div>
            
        </div>
  
        </div>
  )
}
            