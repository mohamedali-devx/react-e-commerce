import './button.css'

function Button({ txt, icon, className, onClick }) {
  return (
    <>
      <button onClick={onClick} className={`btn ${className}`}>
        {txt}
        {icon}
      </button>
    </>
  )
}

export default Button