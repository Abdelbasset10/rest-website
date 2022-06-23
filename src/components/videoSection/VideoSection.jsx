import React ,{useState } from 'react'
import { AiOutlinePlayCircle ,AiOutlinePause } from 'react-icons/ai';

import './VideoSection.css'

const VideoSection = () => {
    const[controlVideo,setControlVideo]=useState(false)
    const vidref=React.useRef();

    const hundleControl=()=>{
        setControlVideo(!controlVideo)
        if(controlVideo){
            vidref.current.play()
        }else{
            vidref.current.pause()
        }
    }
  return (
    <div className='video-section'>
        <video   
        controls ={false}
        src='/video/meal.mp4'
        type="video/mp4"
        loop
        ref={vidref}
        muted />
        <div className='control-video'>
            {controlVideo ? <AiOutlinePlayCircle className='icon-video' onClick={hundleControl}/> : <AiOutlinePause className='icon-video' onClick={hundleControl}/>}
            

        </div>
    </div>
  )
}

export default VideoSection