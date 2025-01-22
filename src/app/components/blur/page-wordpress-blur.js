import React, {
  useEffect,
  useRef
} from 'react'
import blur from './blur'

export default props => { 

  const blurRef = useRef()

  useEffect(() => {

    if(blurRef.current) {

      blur(blurRef.current)
    }

  }, [blurRef.current])

  return <div 
    className="Blur" 
    ref={ blurRef }
  />
}