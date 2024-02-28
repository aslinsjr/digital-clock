import { useState } from 'react'

import ClockComponent from './components/ClockComponent'
import ThemeComponent from './components/ThemeComponent'

import './App.css'

function App() {

  const [theme, setTheme] = useState("")

  const themeId = (e) => {
    setTheme(e.target.id)
  }

  return (
    <div className={theme === "dark-theme-btn" ? "container dark-theme" : "container"}>
      <ThemeComponent id={theme} themeId={themeId}/>
      <ClockComponent themeClass={theme} />
    </div>
  )
}

export default App
