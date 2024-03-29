import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUserActions.js"


// const Logout = ({ logout }) => {
//   return (
//     <div>
//       {logout}
//     </div>
//   )
// }
const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { logout })(Logout)