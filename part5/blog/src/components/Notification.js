import React from 'react'
import PropTypes from 'prop-types'
const Notification = ({ message }) => {
  if (message.content === null) {
    return null
  }

  return (
    <div className={`notificaction ${message.className}`}>
      {message.content}
    </div>
  )
}

Notification.propTypes ={
  message: PropTypes.object.isRequired
}

export default Notification
