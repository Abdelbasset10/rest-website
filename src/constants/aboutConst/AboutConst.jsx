import React from 'react'

const AboutConst = ({title,text}) => {
  return (
    <div  >
        <h1 className='headtext__cormorant' style={{ marginBottom : '0.5rem' }}   >{title}</h1>
        <img src="/img/spoon.png" style={{ width : '45px' }}  alt="" />
        <p className="p__opensans" style={{
    color: 'var(--color-grey)',margin : '1rem 0' }}>{text}</p>
    <button type='button' className='custom__button'>Know More</button>

    </div>
  )
}

export default AboutConst