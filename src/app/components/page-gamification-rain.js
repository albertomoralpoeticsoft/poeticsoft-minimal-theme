import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import RainyDay from './page-gamification-rain-engine'
import image from 'assets/images/pueblo.jpg'

export default props => { 

  const rainRef = useRef()
  const imageRef = useRef()
  const canvasRef = useRef()

  useEffect(() => {

    if(
      imageRef.current &&
      rainRef.current && 
      canvasRef.current
    ) { 

      var engine = new RainyDay(
        rainRef.current,
        canvasRef.current,
        imageRef.current
      );
      engine.trail = engine.TRAIL_DROPS;
      engine.reflection = engine.REFLECTION_HQ;
      engine.gravity = engine.GRAVITY_SIMPLE;
    }

  }, [ 
    canvasRef.current, 
    imageRef.current,
    rainRef.current
  ])

  return <div 
    className="Rain"
    ref={ rainRef }
  >
    <img 
      src={ image }
      ref={ imageRef }
    />
    <canvas 
      id="canvas" 
      ref={ canvasRef }
    />
  </div>
}