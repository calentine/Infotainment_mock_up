import React from 'react'
import HomeIcon from './icons/HomeIcon'
import BackIcon from './icons/BackIcon'
import PowerIcon from './icons/PowerIcon'
import VolumeIcon from './icons/VolumeIcon'
import SeekLIcon from './icons/SeekLIcon'
import SeekRIcon from './icons/SeekRIcon'

function SideNavBar() {
  return (
    <div style={{   display: 'flex', 
                    flexDirection:'column', 
                    margin: "100px 75px", 
                    width:'auto',
                    color: 'white',
                }}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>
            <HomeIcon />
            <h6>Home</h6>
        </div>
        <div>
            <BackIcon />
            <h6>Back</h6>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width:'60px'}}>   
            <div style={{display:'flex', width:'auto', height:'30px', paddingTop:'100px'}}>
                <PowerIcon/>
                <h6>Vol Audio</h6>
            </div>
            </div>
            <div style={{paddingTop:'30px'}}>
                <VolumeIcon />
            </div>
            <div style={{display:'flex', flexDirection:'row', gap: 10}}>
                <SeekLIcon />
                <SeekRIcon />
            </div>
    </div>
  )
}

export default SideNavBar