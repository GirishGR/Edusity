
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonial/Testimonial';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
    
     <Header/>
     <div className="container">
     <Title subtitle='Our Program' title='What we offer' />
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title subtitle='Gallery' title='Campus Photos' />
     <Campus/>
     <Title subtitle='Testimonials' title='What our students say' />
     <Testimonial/>
     <Title subtitle='Contact Us' title='Get in touch'/>
     <ContactUs/>
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
