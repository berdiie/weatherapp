import React from 'react'
import './allblocks.css'
export default function Allblocks({weekly}){
    return(
      
        <div className='blocks'>
           {weekly.map((data, key)=>
           <div className='block01'>
            <center>
            <div className='day'>
                {key==0 ? <span>
                Today
            </span> : 
            <span>
            {data.day}
        </span>}
           
            </div>
            <h4><br/><img src={`https://openweathermap.org/img/w/${data.icon}.png`}/><br/>
                {data.htemp}<sup>o</sup>C-{data.ltemp}<sup>o</sup>C<br></br><br/>
                {data.main}<br/><br/> {data.desc}
            </h4></center></div>
           )
           
            }
            
           </div>
    
    )
}
