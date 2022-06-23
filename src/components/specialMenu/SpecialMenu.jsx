import React from 'react'
import './SpecialMenu.css'
import SpecialConst from '../../constants/specialConst/SpecialConst'

const SpecialMenu = () => {
  return (
    <div className='special-menu-section'>
        <div className='special-menu-section-title' >
            <p className='p__cormorant '>Menu That Fit You Platte</p>
            <img src="/img/spoon.png" alt="" />
            <h1 className='headtext__cormorant '>Today's Special</h1>
        </div>
        <div className='special-menu-section-content'>
            <div className='special-menu-section-content-left-side' >
                <p className='p__cormorant '>Wine & Beer</p>
                <SpecialConst title="Saida Saida" price="$56" text1="AU" text2="Bottle" />
                <SpecialConst title="Gdila Gdila" price="$59" text1="AR" text2="Bottle" />
                <SpecialConst title="Gloria Gloria" price="$44" text1="FR" text2="750 ml" />
                <SpecialConst title="Coca Cola" price="$56" text1="AU" text2="Bottle" />
                <SpecialConst title="Pepsi Pepsi" price="$56" text1="AU" text2="Bottle" />
            </div>
            <div className='special-menu-section-content-center-side' >
                <img src="/img/menu.png" alt="" />
            </div>
            <div className='special-menu-section-content-right-side' >
            <p className='p__cormorant '>Wine & Beer</p>
                <SpecialConst title="Saida Saida" price="$56" text1="AU" text2="Bottle" />
                <SpecialConst title="Gdila Gdila" price="$59" text1="AR" text2="Bottle" />
                <SpecialConst title="Gloria Gloria" price="$44" text1="FR" text2="750 ml" />
                <SpecialConst title="Coca Cola" price="$56" text1="AU" text2="Bottle" />
                <SpecialConst title="Pepsi Pepsi" price="$56" text1="AU" text2="Bottle" />
            </div>

        </div>
        <div className='btn' >
            <button type='button' className='custom__button' >View More</button>
        </div>
        
        
        
    </div>
  )
}

export default SpecialMenu