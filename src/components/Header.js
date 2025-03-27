import React from 'react'

const Header = ({handleDarkmode}) => {
  return (
    <div className='header'>
      <h1>Notes App</h1>
      <button onClick={() => handleDarkmode(
        (previousDarkMode) => !previousDarkMode
      ) } className='save'>Toggle Mode</button>
    </div>
  
  )
}

export default Header;