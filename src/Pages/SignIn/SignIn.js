import React from 'react'
import page from '../../Pages/SignIn/SignIn.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Custominput from '../../Atom/Custominput/Custominput'
import Custombutton from '../../Atom/Custombutton/Custombutton'
export default function SignIn() {
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
                <Custombutton text='Sign in with Google' icon={<FcGoogle/>} className={page.gbtn}/>
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
            