import './searchbar.css'
import React  from 'react'
import { Search } from '@mui/icons-material';
// import{Link} from 'react-router-dom';
export default function Searchbar({value,data,submit,searchplace}) {
  return (
    <>
  <center>
       <div className='bars'>
  <nav class="navbar">
  <form class="form-inline" onSubmit={submit}>

    <input class="form-control mr-sm-2" type="text" name="place" value={value||""} onChange={searchplace}  placeholder="Search" aria-label="Search"/>
    <button type="submit" className='sub'><Search/></button>
  </form></nav>            
</div></center>
  </>    
  )
}
