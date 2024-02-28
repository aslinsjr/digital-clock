import './ThemeComponent.css'

const ThemeComponent = ({themeId, id}) => {

  return (
    <div className='selector-theme'>
      <button className={id === "dark-theme-btn" ? "dark-btn-theme" : "light-btn-theme" } id='light-theme-btn' onClick={(e) => themeId(e)}>Light Theme</button>
      <button className={id === "dark-theme-btn" ? "dark-btn-theme" : "light-btn-theme" } id='dark-theme-btn' onClick={(e) => themeId(e)}>Dark Theme</button>
    </div>
  )
}

export default ThemeComponent