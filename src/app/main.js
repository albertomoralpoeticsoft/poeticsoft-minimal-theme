/*
Docs
https://lucide.dev/icons/
*/

import React from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import APP from './components/app'

const init = () => {

  const domNode = document.getElementById('APP');
  const root = createRoot(domNode);
  
  root.render(
    <Provider store={store}>
      <HashRouter>
        <APP />
      </HashRouter>
    </Provider>
  )
}

if (document.readyState === 'loading') {

  document.addEventListener(
    'DOMContentLoaded',
    init
  )

} else {

  init();
}