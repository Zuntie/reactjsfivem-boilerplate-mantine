import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { MantineProvider } from '@mantine/core';

import HomePage from './index.jsx'
import WindowListener from './utils/WindowListener.js'
import useStore from './state/store.jsx'

import './style.css'
import '@mantine/core/styles.css';



const Root = () => {
  const { visible } = useStore()

  useEffect(() => {
    if (visible == true) {
      document.body.style.display = 'flex'
    } else {
      document.body.style.display = 'none'
    }
  }, [visible])

  return (
    <React.StrictMode>
      <WindowListener>
        <MantineProvider defaultColorScheme='dark'>
          {visible == true ? <HomePage /> : void (0)}
        </MantineProvider>
      </WindowListener>
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Root />)