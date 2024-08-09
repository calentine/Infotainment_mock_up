import React from 'react'
import { useState } from 'react';
import WheelIcon from './icons/WheelIcon'
import AiAssistIcon from './icons/AiAssistIcon'
import AndroidIcon from './icons/AndroidIcon';
import FMIcon from './icons/FMIcon';
import AppsIcon from './icons/AppsIcon';
import NavIcon from './icons/NavIcon';
import TripCompIcon from './icons/TripCompIcon';
import BluetoothIcon from './icons/BluetoothIcon';
import PhoneIcon from './icons/PhoneIcon'


function ServiceComponent() {
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
            <WheelIcon />
            </div>
            <li style={{ '--i': 0, backgroundImage: 'linear-gradient(orange 0%, #34335D 52%, #34335D 92%, orange 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("Navigation Pressed")} ><NavIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 1, backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("Phone Pressed")} ><PhoneIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 2 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Android Pressed")} ><AndroidIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 3, backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)' }}>
              <button className='button_wrapper' onClick={() => console.log("FM Pressed")} ><FMIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 4 , backgroundImage: 'linear-gradient(orange 0%, #34335D 8%, #34335D 52%, orange 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Apps Pressed")} ><AppsIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 5 , backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Bluetooth Pressed")} ><BluetoothIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 6 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Ai Assist Pressed")} ><AiAssistIcon width={width} height={height} /></button>
            </li>
            <li style={{ '--i': 7 , backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)'}}>
              <button className='button_wrapper' onClick={() => console.log("Trip Info Pressed")} ><TripCompIcon width={width} height={height} /></button>
            </li>
          </div>
        </div>
  )
}

export default ServiceComponent