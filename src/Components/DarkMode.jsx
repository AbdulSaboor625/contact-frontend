import React from 'react'
import { useState } from 'react'

export default function DarkMode({handleMode}) {
  const [modeText,setModeText] = useState('Bright')
  const [modeColor,setModeColor] = useState({
    bgHeader:'#fff',
    textHeader:'#ff6a95',
    bgForm : 'rgba(0, 0, 0, 0.616)',
    textForm : '#fff'
  })
  const modeHandler = () => {
    if(modeText === 'Bright'){
      setModeText('Dark')
      setModeColor({bgHeader:'rgb(0, 0, 0.4)',textHeader: '#fff',bgForm : 'rgba(0, 0, 0, 0.616)',
      textForm : '#fff',counttext:'#fff'})
    } else {
      setModeText('Bright')
      setModeColor({bgHeader:'#fff',textHeader: '#ff6a95',bgForm:'#fff',textForm:'#ff6a95',counttext:'#ff6a95'})
    }
    handleMode(modeColor)
  }
  return (
  <button className='modebtn' onClick={modeHandler}>{modeText} Mode</button>  
  )
}
