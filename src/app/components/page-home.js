import React from 'react'
import Fuser from './fuser'
import Clouds from './clouds/page-home-clouds'

export default props => {

  return <Fuser>
    <div
      id="Page"
      className="Home"
    >
      <Clouds />
      <div 
        className={`
          Text
        `}
      >
        POETIC<br />SOFT
      </div>
    </div>
  </Fuser>
}