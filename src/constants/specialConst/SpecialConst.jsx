import React from 'react'

const SpecialConst = ({title,price,text1,text2}) => {
  return (
    <div className='specialConst-section'>
        <div className='specialConst-section-up-side'>
            <h4 >{title}</h4>
            <div />
            <p>{price}</p>
        </div>

        <div className='specialConst-section-down-side' >
            <p>{text1}</p>
            <div />
            <p>{text2}</p>

        </div>

    </div>
  )
}

export default SpecialConst