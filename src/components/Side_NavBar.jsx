import React from 'react'
import Home_Icon from './icons/Home_Icon'
import Back_Icon from './icons/Back_Icon'
import Power_Icon from './icons/Power_Icon'
import Volume_Icon from './icons/Volume_Icon'
import Seek_L_Icon from './icons/Seek_L_Icon'
import Seek_R_Icon from './icons/Seek_R_Icon'

function Side_NavBar() {
  return (
    <div style={{   display: 'flex', 
                    flexDirection:'column', 
                    margin: "100px 75px", 
                    width:'auto',
                    color: 'white',
                }}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>
            <Home_Icon />
            <h6>Home</h6>
        </div>
        <div>
            <Back_Icon />
            <h6>Back</h6>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width:'60px'}}>   
            <div style={{display:'flex', width:'auto', height:'30px', paddingTop:'100px'}}>
                <Power_Icon/>
                <h6>Vol Audio</h6>
            </div>
            </div>
            <div style={{paddingTop:'30px'}}>
                <Volume_Icon />
            </div>
            <div style={{display:'flex', flexDirection:'row', gap: 10}}>
                <Seek_L_Icon />
                <Seek_R_Icon />
            </div>
    </div>
  )
}

export default Side_NavBar