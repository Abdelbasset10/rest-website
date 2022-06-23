import React from 'react'
import './Header.css'
import SubHeading from '../../constants/subHeading/SubHeading'

const Header = () => {
  return (
    <div className='header-section'>
        <div className='header-section-left-side'>
            <SubHeading text="Chase The New Flavour"/>
            <h1>The King To Find Dinning</h1>
            <p className="p__opensans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button type='button' className="custom__button">Explore Menu</button>  


        </div>
        <div className='header-section-right-side'>
            <img src="/img/welcome.png" alt="" />
        </div>

    </div>
  )
}

export default Header