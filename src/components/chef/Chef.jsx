import React from 'react'
import './Chef.css'
import SubHeading from '../../constants/subHeading/SubHeading'
import { RiDoubleQuotesL } from 'react-icons/ri';


const Chef = () => {
  return (
    <div className='chef-section'>
        <div className='chef-section-left-side'>
            <img src="/img/chef.png" alt="" />
        </div>

        <div className='chef-section-right-side'>
            <SubHeading text="Chef's Word"/>
            <h1 className='headtext__cormorant' >What We Believe In</h1>
            <div className='chef-section-right-side-says'>
                <p className='p__opensans' ><RiDoubleQuotesL className='register-icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className='chef-section-right-side-sign' >
                <h1 className='headtext__cormorant' style={{ fontSize : '30px' }} >Kevin Luo</h1>
                <p>Chef &Founder</p>
                <img src="/img/sign.png" alt="" />
            </div>


        </div>

    </div>
  )
}

export default Chef