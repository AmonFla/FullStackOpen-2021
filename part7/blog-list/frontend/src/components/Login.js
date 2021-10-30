
import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button  } from 'react-bootstrap'

const Login = (props) => (

  <Form onSubmit={props.onSubmit}>
    <Form.Group className="mb-3" controlId="formUser">
      <Form.Label>User</Form.Label>
      <Form.Control
        type="text"
        value={props.username}
        onChange={({ target }) => props.setUsername(target.value)}
        placeholder="Ingrese su usuario" />
    </Form.Group>
    <Form.Group className="mb-3"
      value={props.password}
      id="inputPassword" onChange={({ target }) => props.setPassword(target.value)}
      controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Ingrese su contraseña" />
    </Form.Group>
    <Button size="sm" type="submit" variant="primary">Login</Button>
  </Form>

)

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired

}
export default Login
