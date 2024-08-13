import React from 'react'
import './Header.css'
import arrow from '../../Assests/dark-arrow.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerText">
        <h1>We ensure better education for a better world </h1>
        <p>Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='button'>Explore More <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Header
