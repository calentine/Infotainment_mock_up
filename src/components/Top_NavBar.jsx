import React from 'react'
import User_Icon from './icons/User_Icon'
import Audio_Icon from './icons/Audio_Icon'
import Battery_Icon from './icons/Battery_Icon'

function Top_NavBar() {
  return (
    <div style={{ display: 'flex', 
                  flexDirection:'row', 
                  flexWrap:'wrap', 
                  color:'white', 
                  width:"100%", 
                  height:'60px', 
                  alignItems:'center', 
                  margin:"0px 100px", 
                  gap: '20px'}}
    >
    <h6 style={{fontSize:"12px"}}>Audio Source</h6>
    <User_Icon />
    <Audio_Icon />
    <h6 style={{fontSize:"18px", marginLeft: '10px'}}>Audio Power : Off</h6>
    <div style={{marginLeft:'auto'}}><Battery_Icon /></div>
    <h6 style={{fontSize:"30px", marginLeft: '10px'}}>12:22</h6>
  </div>
  )
}

export default Top_NavBar