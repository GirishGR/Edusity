import React from 'react'
import './Programs.css'
import program1 from '../../Assests/program-1.png'
import program2 from '../../Assests/program-2.png'
import program3 from '../../Assests/program-3.png'
import program_icon_1 from '../../Assests/program-icon-1.png'
import program_icon_2 from '../../Assests/program-icon-2.png'
import program_icon_3 from '../../Assests/program-icon-3.png' 


const Programs = () => {
  return (
    <div className='programs '>
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
