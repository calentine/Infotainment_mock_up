import React, { useState } from 'react';
import './App.css';
import Wheel_Icon from './components/icons/Wheel_Icon';
import Ai_Assist_Icon from './components/icons/Ai_Assist_Icon'
import Android_Icon from './components/icons/Android_Icon';
import FM_Icon from './components/icons/FM_Icon';
import Apps_Icon from './components/icons/Apps_Icon';
import Nav_Icon from './components/icons/Nav_Icon';
import Trip_Comp_Icon from './components/icons/Trip_Comp_Icon';
import Bluetooth_Icon from './components/icons/Bluetooth_Icon';
import Phone_Icon from './components/icons/Phone_Icon'


function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <h1>Infotainment</h1>
      <div className="dashboard_container">
      <hr width="100%" size="2" style={{margin:'0px 100px'}} />
        <div className="container">
          <div className={`menu ${menuActive ? 'active' : ''}`}>
            <div className="toggle" onClick={toggleMenu}>
            <Wheel_Icon />
            </div>
            <li style={{ '--i': 0, backgroundImage: 'linear-gradient(orange 0%, #34335D 52%, #34335D 92%, orange 100%)' }}>
              <a href="#"><Nav_Icon /></a>
            </li>
            <li style={{ '--i': 1, backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)' }}>
              <a href="#"><Phone_Icon/></a>
            </li>
            <li style={{ '--i': 2 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <a href="#"><Android_Icon /></a>
            </li>
            <li style={{ '--i': 3, backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)' }}>
              <a href="#"><FM_Icon /></a>
            </li>
            <li style={{ '--i': 4 , backgroundImage: 'linear-gradient(orange 0%, #34335D 8%, #34335D 52%, orange 100%)'}}>
              <a href="#"><Apps_Icon /></a>
            </li>
            <li style={{ '--i': 5 , backgroundImage: 'linear-gradient(green 0%, #34335D 52%, #34335D 92%, green 100%)'}}>
              <a href="#"><Bluetooth_Icon /></a>
            </li>
            <li style={{ '--i': 6 , backgroundImage: 'linear-gradient(blue 0%, #34335D 52%, #34335D 92%, blue 100%)'}}>
              <a href="#"><Ai_Assist_Icon /></a>
            </li>
            <li style={{ '--i': 7 , backgroundImage: 'linear-gradient(red 0%, #34335D 52%, #34335D 92%, red 100%)'}}>
              <a href="#"><Trip_Comp_Icon /></a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
