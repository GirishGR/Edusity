import React from 'react'
import './VideoPlayer.css'
import video from '../../Assests/video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState? '': 'hide'}`} onClick={()=>{setPlayState(false)}}>
      
      <video src={video} autoPlay muted controls loop></video>
    </div>
  )
}

export default VideoPlayer
