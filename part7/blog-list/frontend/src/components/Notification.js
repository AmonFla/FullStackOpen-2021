import React from 'react'
import { connect } from 'react-redux'
const Notification = (props) => {
  if (props.notification === null) {
    return null
  }

  return (
    <div className={`notificaction ${props.notification.className}`}>
      {props.notification.content}
    </div>
  )
}


const mapStateToProps = (state) => {
  return{
    notification: state.notification
  }
}
export default connect(mapStateToProps)(Notification)
