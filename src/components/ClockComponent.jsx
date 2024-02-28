
import { useState, useEffect } from 'react'

import './ClockComponent.css'

const ClockComponent = ({themeClass}) => {

  const dark = {
    backgroundColor: 'rgba(250, 235, 215, 0.5)',
    boxShadow: '5px 5px 100px 10px rgba(250, 235, 215, 0.5)'
  };

  const light = {
    backgroundColor: '#242424',
    boxShadow: '5px 5px 100px 10px rgba(0, 0, 0, 0.507)'
  }

  const darkClock = {
    filter: 'drop-shadow(1px 1px 1rem antiquewhite)',
    color: '#242424'
  };

  const lightClock = {
    filter: 'drop-shadow(1px 1px 1rem #242424)',
    color: 'antiquewhite'
  }

  const [time, updateTime] = useState(new Date())
  
    useEffect(() => {

        const timer = setInterval(() => {
            updateTime(new Date());
        }, 1000);
        return () => clearInterval(timer)
    }, [])

  return (
    <div style={themeClass === "dark-theme-btn" ? dark : light} className='clock-container'> 
        <div style={themeClass === "dark-theme-btn" ? darkClock : lightClock} className='time'>{time.toLocaleTimeString()}</div>
    </div>
    

  )
}

export default ClockComponent
