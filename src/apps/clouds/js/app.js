import React, {
  useEffect,
  useRef
} from 'react'
import clouds from './clouds'

export default props => { 

  const containerRef = useRef()

  useEffect(() => {

    if(containerRef.current) {

      clouds(containerRef.current)
    }

  }, [containerRef.current])

  return <div id="Clouds">
    <div 
      id="container" 
      ref={ containerRef }
    />
  </div>
}