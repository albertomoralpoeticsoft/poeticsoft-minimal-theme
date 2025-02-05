import React, {
  useState,
  useEffect
} from 'react'

export default props => {

  const [ visible, setVisible ] = useState(false)

  useEffect(() => {

    setVisible(false)

    const timeout = setTimeout(() => {

      setVisible(true)

    }, 600)

    return () => {

      setVisible(false)
      clearTimeout(timeout)
    }
  }, [])

  return <div 
    id="Fuser"
    className={` ${ visible ? 'visible' : '' } `}
  >
    {  props.children }
  </div>
}