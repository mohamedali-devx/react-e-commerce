import React from 'react'
import './button.css'

function Button({txt, icon, className}) {
  return (
    <>
        <button className={`btn ${className}`}>
            {txt}
            {icon}
        </button>
    </>
  )
}

export default Button