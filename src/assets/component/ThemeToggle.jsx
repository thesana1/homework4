import React from 'react'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="box">
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  )
}