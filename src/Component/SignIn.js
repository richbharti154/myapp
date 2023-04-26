import React from 'react'
import style from '../Component/SignIn.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Custominput from '../Atom/Custominput'
import Custombutton from '../Atom/Custombutton'
export default function SignIn() {
    return (
       
        <div className={style.main}>
        <div className={style.left}>
             <h1>Board</h1>
        </div>
        <div className={style.right}>
            <div className={style.signin}>
              <h1 className={style.sign}>Sign In</h1>
             <h4 className={style.account}>Sign in to your account</h4>
            </div>
            <div className={style.btnmain}>
                <Custombutton text='Sign in with Google' icon={<FcGoogle/>} className={style.gbtn}/>
                <Custombutton text='Sign in with Apple' icon={<BsApple/>} className={style.gbtn}/>
            </div>
            <div className={style.form}>
                <h4>Email address</h4>
                <Custominput type="email" placeholder="Email" className={style.input} />
                <h4>Password</h4>
                <Custominput type="password" placeholder="Password" className={style.input} />
                <h4>Forgot Password</h4>
                <Custombutton text='Sign In'  className={style.sbtn}/>
                
            </div>
            <div>
                <p>Don't have an account? <a href='/'>Register here</a> </p>
            </div>
            
        </div>
  
        </div>
  )
}
            