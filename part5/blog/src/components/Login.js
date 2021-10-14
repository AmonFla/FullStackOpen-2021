
import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => (
  <>
    <form onSubmit={props.onSubmit}>
      <div>
                User: <input type="text" value={props.username} name="User" onChange={({ target }) => props.setUsername(target.value)} />
      </div>
      <div>
                Passowrd: <input type="password" value={props.password} name="User" onChange={({ target }) => props.setPassword(target.value)} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </>
)

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired

}
export default Login
