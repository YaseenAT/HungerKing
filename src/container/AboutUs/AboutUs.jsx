import React from 'react';

import './AboutUs.css';
import {images} from "../../constants"
const AboutUs = () =>{
  return(
    <div className="app__about app__bg flex__centre " id='aboutUs'>
<div className="app__aboutus-overlay flex_centre"  >

  <img src={images.G} alt="dddd" />
</div>
<div className="app__aboutus-content flex__centre" >
  <div className="app__aboutus-content_about">
    <h1 className="headtext__cormorant"></h1>
    <img src={images.spoon} alt="about_spoon" className='spoon__img' />
    <p className="p__opensans">chup soryo chup soru[jhcjshjdshjdsdshdbshgdhsb</p>
  </div>
</div>
    </div>
  )
} 
 


export default AboutUs;
