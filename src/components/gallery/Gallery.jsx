import React from 'react'
import './Gallery.css'
import SubHeading from '../../constants/subHeading/SubHeading'
import gallery from '../../constants/galleryConst/GalleryConst'
import { FcNext,FcPrevious } from 'react-icons/fc';

const Gallery = () => {
    const imgRef=React.useRef()

    const handlScroll=(position)=>{
        

    if (position === 'left') {
      imgRef.current.scrollLeft -= 300;
    } else {
      imgRef.current.scrollLeft += 300;
    }

    }
  return (
    <div className='gallery-section'>
        <div className='gallery-section-left-side'>
            <SubHeading text="Instagram" />
            <h1 className='headtext__cormorant' >Photo Gallery</h1>
            <button className='custom__button' >View More</button>
            
        </div>

        <div className='gallery-section-right-side'>
            <div className='gallery-section-right-side-flex' ref={imgRef}>
            
            {gallery.map((item)=>{
                return(
                    <div key={item.id} className="gallery-section-right-side-images"  >
                        <img src={item.url} alt=""  />
                    </div>

                )
            })}
            </div>
            <div className='gellery-icons-right' >
                <FcNext className='gallery-icon right' onClick={()=>handlScroll('right')} />
               
            </div>
            <div className='gellery-icons-left' >
            <FcPrevious className='gallery-icon left' onClick={()=>handlScroll('left')} />
               
            </div>
            
            
            

        </div>


    </div>
  )
}

export default Gallery