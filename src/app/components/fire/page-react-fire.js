import React, {
  useEffect,
  useRef
} from 'react'
import initfire from './fire'

export default props => { 

  const canvasRef = useRef()

  useEffect(() => {

    if(canvasRef.current) {
      
      initfire()
    }

  }, [canvasRef.current])

  return <div className="Fire">
    <canvas 
      id="view"
      ref={ canvasRef }
    />
  </div>
}