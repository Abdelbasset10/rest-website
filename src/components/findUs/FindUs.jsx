import React from 'react'
import './FindsUs.css'
import SubHeading from '../../constants/subHeading/SubHeading'

const FindUs = () => {
  return (
    <div className='findUs-section'>
        <div className='findUs-section-left-side'>
            <SubHeading text="Contact" />
            <h1 className='headtext__cormorant' style={{ marginBottom : '4rem' }} >Find Us</h1>
            <p className='p__opensans' style={{color : 'gray'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <h4 className='headtext__cormorant' style={{fontSize : '24px'}} >Opening Hours</h4>
            <p className='p__opensans'>Mon - Fri : 10:00am - 02:00am</p>
            <p className='p__opensans'>Sat - Sun : 10:00am - 03:00am</p>
            <button className='custom__button' style={{ marginTop : '2rem' }} >Visit Us</button>

        </div>

        <div className='findUs-section-right-side' >
            <img src="/img/findus.png" alt="" />

        </div>


    </div>
  )
}

export default FindUs