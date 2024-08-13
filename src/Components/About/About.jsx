import React from 'react'
import './About.css'
import aboutImg from '../../Assests/about.png'
import playIcon  from '../../Assests/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about '>
      <div className="about-left">
      <img src={aboutImg} alt="" className='aboutImg'/>
      <img src={playIcon} alt="" className='playIcon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing tomorrow's leaders today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo reiciendis pariatur ratione obcaecati! Dignissimos assumenda beatae dolore explicabo, ipsam, pariatur recusandae illum molestias ipsa, dolorem autem maxime itaque exercitationem quaerat? </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis magni voluptates repellat quasi, temporibus asperiores doloribus harum odit, illo, deleniti fugiat. Itaque reiciendis enim explicabo similique dicta officia fuga quos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita vel est ut consequuntur dolor dolore laborum alias sint! Unde officiis esse soluta vel odio sint tempore quidem atque quis?</p>
      </div>
    </div>
  )
}

export default About
