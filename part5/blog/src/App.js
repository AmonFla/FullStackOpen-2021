import React, { useState, useEffect } from 'react'
import './App.css'

import BlogList from './components/BlogList'
import Login from './components/Login'
import Notification from './components/Notification'
import NewBlog from './components/NewBlog'
import Toggleable from './components/Togglable'

import servBlog from './service/blogs'
import servLogin from './service/login'

function App () {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState({
    content: null,
    className: ''
  }
  )

  const onLoginHandle = async (event) => {
    event.preventDefault()
    try {
      const user = await servLogin.login(username, password)
      window.localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      servBlog.setToken(user.token)
    } catch (exception) {
      setNotificationMessage({ content: 'Wrong Credentials', className: 'error' })
      setTimeout(() => { setNotificationMessage({ content: null, className: '' }) }, 5000)
    }
  }

  const logoutHandle = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    servBlog.getAll().then(blogs => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user')
    if (loggedUser) { setUser(JSON.parse(loggedUser)) }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog List</h1>
      </header>
      <div className="App-body">
        <Notification message={notificationMessage} />
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
              <Toggleable buttonShow='Create new blog' buttonHide='Cancel action' >
                <NewBlog blogs={blogs} setBlogs={setBlogs} setNotificationMessage={setNotificationMessage}/>
              </Toggleable><br /><br />
              <BlogList blogs={blogs} setBlogs={setBlogs}/>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
