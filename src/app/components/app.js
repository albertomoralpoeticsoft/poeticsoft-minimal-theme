
import React from 'react'
import { 
  Routes, 
  Route 
} from 'react-router-dom'
import sections from './sections'
import Menu from './menu'

export default props => {    

  return <> 
    <Menu />
    { 
      <Routes>
        {
          sections.map((section, index) => <Route 
            key={ index }
            path={ section.path } 
            element={ <section.comp /> } 
          />)
        }
      </Routes>
    }
  </>
}