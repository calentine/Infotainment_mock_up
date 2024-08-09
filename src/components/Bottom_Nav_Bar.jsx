import React from 'react'
import Ai_Assist_Icon from './icons/Ai_Assist_Icon'
import FM_Icon from './icons/FM_Icon';
import Nav_Icon from './icons/Nav_Icon';
import Bluetooth_Icon from './icons/Bluetooth_Icon';
import Phone_Icon from './icons/Phone_Icon'
import Display_L_Selector_Icon from './icons/Display_L_Selector_Icon'
import Display_R_Selector_Icon from './icons/Display_R_Selector_Icon';


function Bottom_Nav_Bar() {
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

export default Bottom_Nav_Bar