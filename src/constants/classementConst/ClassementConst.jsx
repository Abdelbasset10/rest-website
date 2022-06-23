import React from 'react'

const ClassementConst = ({img,title,text}) => {
  return (
    <div className='classementConst-section'>
        <div className='classementConst-section-left-side' >
            <img src={img} alt="" />
        </div>
        <div className='classementConst-section-right-side'>
            <h4>{title}</h4>
            <p>{text}</p>

        </div>
        
    </div>
  )
}

export default ClassementConst