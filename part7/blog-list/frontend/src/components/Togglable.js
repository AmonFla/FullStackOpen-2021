import React, { useState, useImperativeHandle  } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


const Toggleable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  return (
    <>
      <span style={hideWhenVisible}>
        <Button size="sm" variant="outline-primary" onClick={toggleVisibility}>{props.buttonShow}</Button>
      </span>
      <div style={showWhenVisible}>
        {props.children}
        <Button size="sm" variant="outline-secondary" onClick={toggleVisibility}>{props.buttonHide}</Button>
      </div>
    </>
  )
})
Toggleable.displayName = 'TogglableBlogItem'


Toggleable.propTypes ={
  buttonShow: PropTypes.string.isRequired,
  buttonHide: PropTypes.string.isRequired,
}

export default Toggleable
