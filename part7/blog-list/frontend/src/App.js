import React, { useState, useEffect } from 'react'
import './App.css'

import Login from './components/Login'
import Notification from './components/Notification'
import BlogMain from './components/BlogMain'
import servLogin from './service/login'
import { setNotification } from './reducer/NotificactionReducer'
import { setUser, cleanUser } from './reducer/UserReducer'
import { connect } from 'react-redux'
import UsersBlogsDetails from './components/UsersBlogsDetails'
import { initBlog } from './reducer/BlogReducer'
import { useDispatch } from 'react-redux'

import {
  Switch,
  Route
} from 'react-router-dom'

function App (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlog())
  },[dispatch])


  const onLoginHandle = async (event) => {
    event.preventDefault()
    try {
      const user = await servLogin.login(username, password)
      localStorage.setItem('user', JSON.stringify(user))
      props.setUser(user)
    } catch (exception) {
      props.setNotification({ content: 'Wrong Credentials', className: 'error' },5)
    }
  }

  const logoutHandle = () => {
    localStorage.removeItem('user')
    props.cleanUser(null)
  }


  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) { props.setUser(JSON.parse(loggedUser)) }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog List</h1>
      </header>
      <div className="App-body">
        <Notification />
        { props.user === null
          ? <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={onLoginHandle}/>
          : (
            <>
              <p> Loged user: {props.user.name} <button onClick={() => logoutHandle()}>Logout</button></p>
              <Switch>
                <Route path="/users">
                  <UsersBlogsDetails />
                </Route>
                <Route path="/">
                  <BlogMain />
                </Route>
              </Switch>
            </>
          )
        }
      </div>
    </div>
  )
}

const stateToPropsMap = (state) => {
  return{
    user: state.user
  }
}

export default connect(stateToPropsMap, { setNotification,setUser, cleanUser, initBlog })(App)
