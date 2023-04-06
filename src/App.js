import Searchbar from './components/searchbar/Searchbar';
import React,{useState} from 'react'
import './App.css';
import Loading from './components/Loading';
import axios from "axios"
import Place  from './components/place/Place';
import Allblocks from './components/allblocks/Allblocks';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  const[state,setState]=useState({value:'',current:{},weekInfo:[],loading:false,error:false,})
  const inputValue =e =>{
    setState({
      ...state,
      value: e.target.value,
     
    })
    console.log("ee",e.target);
  }
   const handleSearchCity=e=>{
    e.preventDefault();
    setState({...state,
    loading:true,})
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`).then((data)=>{
      
    const datas=data.data
    const months=['January','February','March','April','May','June','July','August','September','November','December']
    const days=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday']
    const currentDate=new Date()
    console.log("day----",currentDate.getDay())
    const date=`${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`
    console.log("date----",date);
    const sunset=new Date(datas.list[0].sunrise*1000).toLocaleTimeString().slice(0,4)
    const sunrise=new Date(datas.list[0].sunset*1000).toLocaleTimeString().slice(0,4)

      const current={
        city:data.data.city.name,
        country:data.data.city.country,
        population:data.data.city.population,
        sunrise:sunrise,
        sunset:sunset,
        date:date,
        clouds:data.data.list[0].clouds,
        pressure:data.data.list[0].pressure,
        humidity:data.data.list[1].humidity,
        description:data.data.list[0].weather[0].description,
        main:data.data.list[0].weather[0].main,
        icon:data.data.list[0].weather[0].icon,
        temp:data.data.list[0].temp,
        ltemp:data.data.list[0].temp.min,
        htemp:data.data.list[0].temp.max,
        speed:data.data.list[0].speed
      }
       const weekData=datas.list
       console.log(weekData);
       const weekInfo=weekData.map((data,index)=>{
        return{
          key:index,
          main:data.weather[0].main,
          day:new Date(data.dt*1000).toLocaleString(`en-US`,{ weekday:`long`,year:`numeric`,month:`long`,day:`numeric`}).slice(0, 3),
          desc:data.weather[0].description,
          icon:data.weather[0].icon,
          htemp:data.temp.max,
          ltemp:data.temp.min,
        }})
        setState({
          ...state,current,weekInfo,loading:false,error:false,
        })
        })
      .catch((error)=>{
        setState({
          ...state,current:{},weekInfo:[],loading:false,error:true
        })
      })
       
      // console.log(current);
      console.log(state)
 
      }
 
 return(
    <>
      <img className='image' src="https://www.teahub.io/photos/full/96-964582_material-design-wallpapers-desktop-material-design-background-weather.jpg" alt="img"/>
    <Searchbar value={state.value} searchplace={inputValue} submit={handleSearchCity}/>
    {
      state.loading===true? 
      <Loading/>:
      <div>
        {state.current.country!==undefined?
        <div className='weather'>
          <Place today={state.current}/>
          <Allblocks weekly={state.weekInfo}/>
        </div>:
      state.error?
      <p className='error_loc'>Sorry! Invalid location.</p>:
      <div>

      </div>
      }
      </div>
    }
    </>
 )
}

export default App;