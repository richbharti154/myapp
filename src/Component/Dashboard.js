import React from 'react'
import style from '../Component/Dashboard.module.css'
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
export default function Dashboard(){
    const data=[
    {
        name:'Dashboard',
        icons:<MdSpaceDashboard/>,
    },
    {
        name:'Transaction',
        icons:< AiOutlineTransaction/>,

    },
    {
        name:'Shedules',
        icons:< AiOutlineSchedule/>,
    },
    {
      name:'Users',
      icons:< BiUserCircle/>
    },
    {
        name:'setting',
        icons:< IoSettings/>

    },
    ]
    const data1=[
        {
            name:'Total Revenues',
            Likes:'$2,129,430',
        },
        {
            name:'Total Transaction',
            Likes:1520
        },
        {
            name:'Total Likes',
            Likes:'9,721',
        },
        {
            name:'Toatal Likers',
            Likes:'892',
        }
    ]
    return(
        <>
        <div className={style.mainContainer}>
            <div className={style.main2}>
              <div className={style.Boardcontainer}> 
              
            <h3  className={style.Board}>Board
           {data.map((ele)=><p className={style.data}>{ele.icons}{ele.name}</p>)}
            </h3>
           
            </div> 
           <div className={style.map}>
             {data1.map((ele)=><div className={style.name}>{ele.name}<p>{ele.Likes}</p></div>)}
             </div>
             <h3  className={style.Dashboard}>Dashboard</h3>
            
                <p className={style.Activities}>Activities</p>
            
             
            
             </div>
           
             
             </div>
            
        </> 
    )
}