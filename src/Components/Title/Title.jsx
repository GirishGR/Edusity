import React from 'react'
import './Title.css'


const Title = ({subtitle, title}) => {
  return (
    <div className='title container'>
      {/* <p>{props.subtitle}</p> */} <p>{subtitle}</p>
      {/* <h2>{props.title}</h2> */}  <h2>{title}</h2>
    </div>
  )
}

export default Title
