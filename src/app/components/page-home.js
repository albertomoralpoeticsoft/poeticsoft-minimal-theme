import React, {
  useState,
  useEffect
} from 'react'
import Fuser from './fuser'
import Clouds from './page-home-clouds'

export default props => {

  const [ visible, setVisible ] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => setVisible(true), 2000)

    return () => { clearTimeout(timer) }

  }, [])

  return <Fuser>
    <div
      id="Page"
      className="Home"
    >
      <Clouds />
      <div 
        className={`
          Text
          ${ visible ? 'visible' : '' }
        `}
      >
        POETIC<br />SOFT
      </div>
    </div>
  </Fuser>
}