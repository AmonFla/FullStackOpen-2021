import React, { useState } from 'react'

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
      <>
          <span style={hideWhenVisible}>
              <button onClick={toggleVisibility}>{props.buttonShow}</button>
          </span>
          <div style={showWhenVisible}>
              {props.children}
              <button onClick={toggleVisibility}>{props.buttonHide}</button>
          </div>
      </>
  )
}

export default Toggleable
