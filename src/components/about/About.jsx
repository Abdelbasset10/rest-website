import React from 'react'
import './About.css'
import AboutConst from '../../constants/aboutConst/AboutConst'

const About = () => {
  return (
    <div className='about-section'>
        <div className='about-section-g-image'>
            <img src="/img/G.png" alt="" />
        </div>
        <div className='about-section-content'>
            <div className='about-section-left-side'>
                <AboutConst title="About Us" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
            </div>
        
            <div className='about-section-center-side'>
                <img src="/img/knife.png" alt="" />
            </div>

            <div className='about-section-right-side'>
                <AboutConst title="Our History" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
            </div>
            </div>

    </div>
  )
}

export default About