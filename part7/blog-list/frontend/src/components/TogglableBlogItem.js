import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TogglableBlogItem = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const TogglableBlogItemVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <span style={hideWhenVisible}>
        <button onClick={TogglableBlogItemVisibility}>{props.buttonShow}</button>
      </span>
      <span style={showWhenVisible}>
        <button onClick={TogglableBlogItemVisibility}>{props.buttonHide}</button><br />
        {props.children}

      </span>
    </>
  )
}


TogglableBlogItem.propTypes ={
  buttonShow: PropTypes.string.isRequired,
  buttonHide: PropTypes.string.isRequired,
}

export default TogglableBlogItem
