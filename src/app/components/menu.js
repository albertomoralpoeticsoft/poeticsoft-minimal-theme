import React from 'react'
import {
  useNavigate
} from 'react-router-dom'
import sections from './sections'
import { Skull } from 'lucide-react';

export default props => {

  const navigate = useNavigate()

  return <div id="Menu">   
    <div className="Launcher">
      <Skull />
    </div>
    <div className="Options">
      {
        sections.map((section, index) => <div 
            key={ index }
            className="Option"
            onClick={ () => navigate(section.path) }
          >
            { section.title }
          </div>
        )
      }
    </div>
  </div>
}
