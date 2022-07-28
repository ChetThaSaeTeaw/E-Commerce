import React from 'react';
import { Link } from 'react-router-dom';

import "./Usernavbar.scss";

//Import Icons
import { FaRegUserCircle } from 'react-icons/fa';

// Import Images
import logo_brand from "../../../Assets/Images/Design/shopping-logo.png";

function Usernavbar() {

  const menuBar = [
    {
      id : 1,
      title : "Home",
      linkTo : "/"
    },{
      id : 2,
      title : "Product",
      linkTo : "/product"
    },{
      id : 3,
      title : "Promotion/Sale",
      linkTo : "/promotion"
    },{
      id : 4,
      title : "About",
      linkTo : "/about"
    }
  ]

  return (
    <nav className='usernavbar_container'>
      <div className='usernavbar_logo_box'>
        <Link to="/">
            <img src={logo_brand} alt="Logo" />
        </Link>
      </div>
      <div className='usernavbar_menu_box'>
        {menuBar.map(item => {
          return (
            <span key={item.id}>
              <Link to={item.linkTo}>{item.title}</Link>
            </span>
          )
        })}
      </div>
      <div className='usernavbar_login_box'>
        <span>
          <span><FaRegUserCircle /></span>
          <p>Login</p>
        </span>
      </div>
    </nav>
  )
}

export default Usernavbar