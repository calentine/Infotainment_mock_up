import React from 'react'
import UserIcon from './icons/UserIcon'
import AudioIcon from './icons/AudioIcon'
import BatteryIcon from './icons/BatteryIcon'

function TopNavBar() {
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
    <UserIcon />
    <AudioIcon />
    <h6 style={{fontSize:"18px", marginLeft: '10px'}}>Audio Power : Off</h6>
    <div style={{marginLeft:'auto'}}><BatteryIcon /></div>
    <h6 style={{fontSize:"30px", marginLeft: '10px'}}>12:22</h6>
  </div>
  )
}

export default TopNavBar