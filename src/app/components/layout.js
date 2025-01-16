import React from 'react'
import {
  Outlet 
} from 'react-router-dom'
import Menu from './menu'

export default props => {

  return <div id="Layout"> 
    <Menu />
    <Outlet />
  </div>
}
