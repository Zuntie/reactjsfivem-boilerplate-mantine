import { useState, useEffect } from 'react'
import useStore from './state/store';
import SendNuiCallback from './utils/sendnuicallback';

import { Button } from '@mantine/core';



function App() {
  const { value, buttonValue, setButtonValue, resetState } = useStore();
  const [whoami, setWhoami] = useState('?')

  useEffect(() => {
    SendNuiCallback('whoami', {}, (cb) => {
      setWhoami(cb)
    })
  }, [])

  return (
    <div className='nui-wrapper w-screen h-screen flex justify-center items-center'>
      <div id="nui-content" className='w-1/2 h-1/2 bg-red-400 p-2'>
        <p><strong>Value:</strong> {value}</p>
        <p><strong>ButtonValue:</strong> {buttonValue}</p>
        <p><strong>Who am i: </strong> {whoami}</p>
        <Button variant="filled" className='mt-2' onClick={() => setButtonValue('Button Value')}>Change Value</Button>
        <Button variant="filled" className='mt-2 ml-3' onClick={() => resetState()}>Reset</Button>
      </div>
    </div>

  )
}

export default App
