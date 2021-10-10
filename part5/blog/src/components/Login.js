
import React from 'react'
const Login = (props) => (
    <>
        <form onSubmit={props.onSubmit}>
            <div>
                User: <input type="text" value={props.username} name="User" onChange={({ target }) => props.setUsername(target.value)} />
            </div>
            <div>
                Passowrd: <input type="text" value={props.password} name="User" onChange={({ target }) => props.setPassword(target.value)} />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </>
)
export default Login
