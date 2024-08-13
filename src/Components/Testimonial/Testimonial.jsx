import React, { useRef } from 'react'
import './Testimonial.css'
import nextButton from '../../Assests/next-icon.png'
import backIcon from '../../Assests/back-icon.png'
import user1 from '../../Assests/user-1.png'
import user2 from '../../Assests/user-2.png'
import user3 from '../../Assests/user-3.png'
import user4 from '../../Assests/user-4.png'


const Testimonial = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
      tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackword = () =>{
  if(tx < 0){
    tx+=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className=' testimonials'>
      <img src={nextButton} alt="" className='nextBtn' onClick={slideForward}/>
      <img src={backIcon} alt="" className='backBtn' onClick={slideBackword}/>

      <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className='userInfo'>
                    <img src={user1} alt="" />
                    <div>
                      <h3>Madhura S</h3>
                      <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi nulla totam sapiente, unde illo voluptatum? Omnis doloribus nam excepturi hic iusto cum exercitationem, iste, a officiis dolores quae est.</p>
                 
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className='userInfo'>
                    <img src={user2} alt="" />
                    <div>
                      <h3>Edward Lous</h3>
                      <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi nulla totam sapiente, unde illo voluptatum? Omnis doloribus nam excepturi hic iusto cum exercitationem, iste, a officiis dolores quae est.</p>
                  
                </div>
              </li>
         
              <li>
                <div className="slide">
                  <div className='userInfo'>
                    <img src={user3} alt="" />
                    <div>
                      <h3>Hurtle Aude</h3>
                      <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi nulla totam sapiente, unde illo voluptatum? Omnis doloribus nam excepturi hic iusto cum exercitationem, iste, a officiis dolores quae est.</p>
                  
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className='userInfo'>
                    <img src={user4} alt="" />
                    <div>
                      <h3>Girish</h3>
                      <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi nulla totam sapiente, unde illo voluptatum? Omnis doloribus nam excepturi hic iusto cum exercitationem, iste, a officiis dolores quae est.</p>
                
                </div>
              </li>
            </ul>
      </div>
    </div>
  )
}

export default Testimonial
