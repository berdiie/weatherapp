import React from 'react'
import  './place.css';
export default function Searchbar({today}){
    
    return(
        <div className='block'>
            <div className='block1'>
            <p className='text1'>{today.city}</p><br/>
            <p className='text2'>{today.date}</p><br/>
            <p className='text3'>Population:{today.population}</p>

          
            </div> 
             <div className='block2'>
             <h1 className='icon1'>🌦️</h1><br/>         
             <p><img className='icon2' src="https://cdn-icons-png.flaticon.com/512/1146/1146885.png"/>
             <h2 className='rise'>{today.sunrise} A.M</h2></p><br/>
             <p><img className='icon3' src="https://cdn-icons-png.flaticon.com/512/808/808365.png"/>
             <h2 className='set'>{today.sunset} P.M</h2></p>
             {/* <p ><image  className='wind' src="https://cdn-icons-png.flaticon.com/128/4343/4343234.png"/>
             <h2 className='wind0'>{today.pressure}</h2></p> */}
            </div> 
        </div>
            )
}