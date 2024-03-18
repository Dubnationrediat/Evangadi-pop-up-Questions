import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../Images/evangadi-logo-home.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header container-fluid'>
        <div className='innerContainer justify-content-around container d-flex '>
            <div className='header__image d-none d-md-block '>
              <Link to={'https://www.evangadi.com/'}>
              <img src={logo} alt="Evangadi logo" />
              </Link>
            </div>
            <div className='d-flex  innerContainer2  d-sm-block '>
               <h1 className="animate__animated      animate__shakeY   animate__repeat-3 p-2 ">
               Pop-Up Questions
            </h1>
            </div>
        </div>
    </div>
  )
}

export default Header