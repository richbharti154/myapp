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
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = useState(null);
 
    let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe1 = auth.onAuthStateChanged((users) => {
      setUser(users);
    });

    return unsubscribe1;
  }, []);

  const signGoogle = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  function handlesubmit() {
    
    if(user != null && email != null  && password != null){
      alert("welcome ");
      navigate("/Home");
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
            <Custombutton text="Sign in with Google" icon={<FcGoogle />}
             className={page.gbtn} onClick={signInWithGoogle} />
          ) : (
            <Custombutton text="Sign out from Google" icon={<FcGoogle />} className={page.googlebtn} onClick={signGoogle} />
          )}

                <Custombutton text='Sign in with Apple' icon={<BsApple/>} className={page.googlebtn}/>
            </div>
            <div className={page.mainInput}>
                <h4>Email address</h4>
                <Custominput type="email" placeholder="Email" className={page.input} value={user ? user.email : email}/>
                <h4>Password</h4>
                <Custominput type="password" placeholder="Password" className={page.input} value={user ? user.refreshToken : password} />
                <h4>Forgot Password</h4>
                <Custombutton onClick={()=> handlesubmit()}text='Sign In'  className={page.submitbtn}/>
                
            </div>
            <div>
                <p>Don't have an account? <a href='/'>Register here</a> </p>
            </div>
            
        </div>
  
        </div>
  )
}
            