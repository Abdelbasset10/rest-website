import React from 'react'
import './Classement.css'
import SubHeading from '../../constants/subHeading/SubHeading'
import ClassementConst from '../../constants/classementConst/ClassementConst'

const Classement = () => {
  return (
    <div className='classement-section'>
        <div className='classement-section-img'>
            <img src="/img/logo.png" alt="" />
        </div>

        <div className='classement-section-content'>
            <div className='classement-section-content-left-side'>
                <SubHeading text="Awards & Recognition"/>
                <h1 className='headtext__cormorant' >Our Laurels</h1>
                <div className='classement-section-content-left-side-classement'>
                    <ClassementConst img='/img/award02.png' title="Bib Gourmond" text="Lorem Ipsum is simply dummy text of the" />
                    <ClassementConst img='/img/award01.png' title="Rising Star" text="Lorem Ipsum is simply dummy text of the" />
                    <ClassementConst img='/img/award05.png' title="AA Hospitality" text="Lorem Ipsum is simply dummy text of the" />
                    <ClassementConst img='/img/award03.png' title="Oustanding Chef" text="Lorem Ipsum is simply dummy text of the" />
                </div>
                

            </div>
            <div className='classement-section-content-right-side' >
                <img src="/img/laurels.png" alt="" />

            </div>

        </div>


    </div>
  )
}

export default Classement