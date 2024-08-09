import React from 'react'
import { useState } from 'react';
import Wheel_Icon from './icons/Wheel_Icon' 
import Ai_Assist_Icon from './icons/Ai_Assist_Icon'
import Android_Icon from './icons/Android_Icon';
import FM_Icon from './icons/FM_Icon';
import Apps_Icon from './icons/Apps_Icon';
import Nav_Icon from './icons/Nav_Icon';
import Trip_Comp_Icon from './icons/Trip_Comp_Icon';
import Bluetooth_Icon from './icons/Bluetooth_Icon';
import Phone_Icon from './icons/Phone_Icon'


function Service_Component() {
    const width = 70;
    const height = 70;
    const [menuActive, setMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  return (
    <div className="container">
          <div className={`menu ${menuActive ? 'active' : ''}`}>
            <div className="toggle" onClick={toggleMenu}>
            <Wheel_Icon />
            </div>
            <li style={{ '--i': 0, backgroundImage: 'linear-gradient(orange 0%, #34335D 52%, #34335D 92%, orange 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("Navigation Pressed")} ><Nav_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 1, backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("Phone Pressed")} ><Phone_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 2 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Android Pressed")} ><Android_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 3, backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("FM Pressed")} ><FM_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 4 , backgroundImage: 'linear-gradient(orange 0%, #34335D 8%, #34335D 52%, orange 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Apps Pressed")} ><Apps_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 5 , backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Bluetooth Pressed")} ><Bluetooth_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 6 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Ai Assist Pressed")} ><Ai_Assist_Icon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 7 , backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Trip Info Pressed")} ><Trip_Comp_Icon width={width} height={height} /></button>
            </li>
          </div>
        </div>
  )
}

export default Service_Component