import React from 'react'
import Fuser from './fuser'
import Blur from './blur/page-wordpress-blur'

export default props => { 

  return <Fuser>
    <div
      id="Page"
      className="Wordpress"
    >
      <div 
        className={`
          Text
        `}
      >
        POETIC<br />SOFT
      </div>
      <Blur />
    </div>
  </Fuser>
}