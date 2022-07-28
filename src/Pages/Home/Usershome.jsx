import React from 'react';

import "./Usershome.scss";

// Import Components
import Usernavbar from '../../Components/Navbar/Usersnavbar/Usernavbar';
import Maincarousel from '../../Components/Carousel/homepage_carousel/Maincarousel';

function Usershome() {
  return (
    <div className='user_home_container'>
        <Usernavbar />
        <div className='userhome_content_container'>
          <Maincarousel />
        </div>
    </div>
  )
}

export default Usershome;