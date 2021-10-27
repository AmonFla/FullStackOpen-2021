import React, { useState, useEffect } from 'react'
import './App.css'

import Login from './components/Login'
import Notification from './components/Notification'
import BlogMain from './components/BlogMain'
import servLogin from './service/login'
import { setNotification } from './reducer/NotificactionReducer'
import { connect } from 'react-redux'

function App (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  const onLoginHandle = async (event) => {
    event.preventDefault()
    try {
      const user = await servLogin.login(username, password)
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
    } catch (exception) {
      props.setNotification({ content: 'Wrong Credentials', className: 'error' },5)
    }
  }

  const logoutHandle = () => {
    localStorage.removeItem('user')
    setUser(null)
  }


  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) { setUser(JSON.parse(loggedUser)) }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog List</h1>
      </header>
      <div className="App-body">
        <Notification />
        { user === null
          ? <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={onLoginHandle}/>
          : (
            <>
              <p> Loged user: {user.name} <button onClick={() => logoutHandle()}>Logout</button></p>
              <BlogMain />
            </>
          )
        }
      </div>
    </div>
  )
}

export default connect(null, { setNotification })(App)
