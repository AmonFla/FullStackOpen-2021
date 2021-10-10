import React from 'react'

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

export default Notification
