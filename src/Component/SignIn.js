import React from 'react'
import style from '../Component/SignIn.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import CustomInput from '../Atom/CustomInput'
import CustomButton from '../Atom/CustomButton'
export default function SignIn() {
    return (
        <>
            <div className={style.mainContainer} >

                <div className={style.RightSection}>
                    <h2>Board</h2>
                </div>
                <div className={style.LeftSection}>
                    <div className={style.heading}>
                        <h1 >Sign In</h1>

                        <p className={style.head}>Sign in to Your account</p>

                        </div>
                       
                        <CustomButton className={style.buttonhead} icons={<FcGoogle/>} text='Sign in With Google'/>
                        <CustomButton className={style.buttonhead} icons={<BsApple/>}
                         text='Sign in With Apple'/>
                      
                <div className={style.box}>
                    <h5 className={style.email}>EmailAddress</h5>
                    <CustomButton text='Johndn@gmail.com'/>
                  
                    
                        
                    
                </div>
                       
                </div>
                
               






            </div>







        </>

    )
}