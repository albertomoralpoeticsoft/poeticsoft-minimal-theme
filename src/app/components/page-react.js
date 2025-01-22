import React from 'react'
import Fuser from './fuser'
import Fire from './fire/page-react-fire'

export default props => { 

  return <Fuser>
    <div
      id="Page"
      className="React"
    >
      <div 
        className={`
          Text
        `}
      >
        POETIC<br />SOFT
      </div>
      <Fire />
    </div>
  </Fuser>
}