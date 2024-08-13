import React from 'react'
import './ContactUs.css'
import msgIcon from '../../Assests/msg-icon.png'
import mailIcon from '../../Assests/mail-icon.png'
import phoneIcon from '../../Assests/phone-icon.png'
import locationIcon from '../../Assests/location-icon.png'
import whiteArrow from '../../Assests/white-arrow.png'

const ContactUs = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ae568a45-76a9-4edd-9983-994b74e5c99d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    
  };


  return (
    <div className='contact'>
      <div className="contactColumn">
        <h3>Send us a message <img src={msgIcon} alt="" /></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores vero maiores nesciunt nostrum cum nam laudantium deleniti officiis. Eveniet saepe eum cum aut enim modi cumque quidem eligendi non explicabo.</p>
          <ul>
            <li><img src={mailIcon} alt="" />Contact@fullstack.dev</li>
            <li><img src={phoneIcon} alt="" />+91-9988776655</li>
            <li><img src={locationIcon} alt="" /> Marathahalli , Bengaluru - 560033</li>
          </ul>

      </div>

      <div className="contactColumn">
              <form onSubmit={onSubmit}>
                <label>Full Name</label>
                <input type="text" name="name" id="" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required> 
                </textarea>
                <button type='submit' className='button dark dark-btn'>Submit <img src={whiteArrow} alt="" /></button> 
              <span>{result}</span>
              </form>
        </div>
    </div>
  )
}

export default ContactUs
