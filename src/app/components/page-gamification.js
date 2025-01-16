import React from 'react'
import Fuser from './fuser'
import Rain from './page-gamification-rain'

export default props => { 

  return <Fuser>
    <div
      id="Page"
      className="Gamification"
    >
      <Rain />
    </div>
  </Fuser>
}