import { useState, useEffect } from 'react'

import ClockComponent from './components/ClockComponent'
import ThemeComponent from './components/ThemeComponent'

import './App.css'

function App() {

  const [theme, setTheme] = useState("")

  const themeId = (e) => {
    setTheme(e.target.id)
  }

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark-theme-btn")
    }
  },[])

  return (
    <div className={theme === "dark-theme-btn" ? "container dark-theme" : "container"}>
      <ThemeComponent id={theme} themeId={themeId}/>
      <ClockComponent themeClass={theme} />
    </div>
  )
}

export default App
