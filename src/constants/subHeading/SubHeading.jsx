import React from 'react'

const SubHeading = ({text}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
        <p className="p__opensans" style={{ marginBottom : '0rem' }}>{text}</p>
        <img src="/img/spoon.png" alt="" style={{ width : '45px' }} />

    </div>
  )
}

export default SubHeading