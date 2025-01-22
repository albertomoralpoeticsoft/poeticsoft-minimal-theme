import React, {
  useEffect,
  useRef
} from 'react'
import init from './src/init'
import videojpg from 'assets/images/video.jpg'
import videowebm from 'assets/images/video.webm'
import videomp4 from 'assets/images/video.mp4'

useEffect

export default props => { 

  const videoRef = useRef()
  const containerRef = useRef()

  useEffect(() => {

    if(videoRef.current && containerRef.current) {

      init(
        videoRef.current,
        containerRef.current
      )
    }
  }, [
    videoRef.current,
    containerRef.current
  ])

  return <div className="Rain">
    <video 
      id="videobg" 
      src={ videomp4 } 
      poster={ videojpg }
      autoPlay 
      loop 
      muted
      ref={ videoRef }
    >
      <source src={ videowebm } type="video/web" />
      <source src={ videomp4 } type="video/mp4" />
    </video>
    <canvas
      id="container"
      ref={ containerRef }
    />
  </div>
}