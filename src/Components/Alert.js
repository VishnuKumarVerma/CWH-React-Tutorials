import React from 'react'

export default function Alert(props) {
  return (
   <div>
   <div className={`alert alert-${props.alertType.type} alert-dismissible fade show`} role="alert">
        {props.alertType.type}: <strong>{props.alertType.msg}</strong>
    </div>
    </div>
  )
}
