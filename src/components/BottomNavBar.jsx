import React from 'react'
import Ai_Assist_Icon from './icons/AiAssistIcon'
import FM_Icon from './icons/FMIcon';
import Nav_Icon from './icons/NavIcon';
import Bluetooth_Icon from './icons/BluetoothIcon';
import Phone_Icon from './icons/PhoneIcon'
import Display_L_Selector_Icon from './icons/DisplayLSelectorIcon'
import Display_R_Selector_Icon from './icons/DisplayRSelectorIcon';


function BottomNavBar() {
  const iconHeight = 40;
  const iconWidth = 40;
  return (
    <div style={{ display: 'flex', 
        flexDirection:'row', 
        flexWrap:'wrap', 
        color:'white',
        backgroundColor:'#222222', 
        width:"100%", 
        height:'60px', 
        margin:"0px 150px", 
        alignItems:'center',
        borderRadius:'13px', 
        border:'1px white solid'
        }}    
    >   
        <div style={{marginLeft: '20px'}}></div>
        <Nav_Icon width={iconWidth} height={iconHeight} />
        <h6 style={{fontSize:"18px", marginLeft: '20px'}}>Navigation</h6>
        
        <div style={{marginLeft: '20px'}}></div>
        <Phone_Icon width={iconWidth} height={iconHeight}/>
        <h6 style={{fontSize:"18px", marginLeft: '20px'}}>Phone</h6>
        
        <div style={{marginLeft: '20px'}}></div>
        <FM_Icon width={iconWidth} height={iconHeight} />
        <h6 style={{fontSize:"18px", marginLeft: '20px'}}>FM</h6>
        
        <div style={{marginLeft: '20px'}}></div>
        <Bluetooth_Icon width={iconWidth} height={iconHeight}/>
        <h6 style={{fontSize:"18px", marginLeft: '20px'}}>Bluetooth</h6>
        
        <div style={{marginLeft: '20px'}}></div>
        <Ai_Assist_Icon width={iconWidth} height={iconHeight}/>
        <h6 style={{fontSize:"18px", marginLeft: '20px'}}>Ai Assist</h6>

        
        <div style={{marginLeft: '280px'}}></div>
          <Display_L_Selector_Icon/>
          <div style={{marginLeft: '10px'}}></div>
          <Display_R_Selector_Icon/>
        <h6 style={{fontSize:"18px", marginLeft: 'auto'}}>Display Mode</h6>
    </div>
  )
}

export default BottomNavBar