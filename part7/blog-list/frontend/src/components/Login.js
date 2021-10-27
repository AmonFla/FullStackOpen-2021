
import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => (
  <>
    <form onSubmit={props.onSubmit}>
      <div>
                User: <input type="text" value={props.username} id="inputUser" onChange={({ target }) => props.setUsername(target.value)} />
      </div>
      <div>
                Password: <input type="password" value={props.password} id="inputPassword" onChange={({ target }) => props.setPassword(target.value)} />
      </div>
      <div>
        <button type="submit" id="buttonLogin">Login</button>
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
