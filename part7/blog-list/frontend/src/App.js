import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initBlog } from './reducer/BlogReducer'
import { useDispatch } from 'react-redux'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import Login from './components/Login'
import Notification from './components/Notification'
import BlogMain from './components/BlogMain'
import UsersBlogsCountInfo from './components/UsersBlogsCountInfo'
import UsersBlogsDetails from './components/UsersBlogsDetails'
import BlogDetail from './components/BlogDetail'

import servLogin from './service/login'

import { setNotification } from './reducer/NotificactionReducer'
import { setUser, cleanUser } from './reducer/UserReducer'





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
      props.setNotification({ content: 'Wrong Credentials', className: 'danger' },5)
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

  const match = useRouteMatch('/blogs/:id')
  const blog = match
    ? props.blogs.find(blog => blog.id === match.params.id)
    : null

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link className="navitem" to="/">Blogs</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link className="navitem" to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {props.user
                ? <em>{props.user.name} logged in <button onClick={() => logoutHandle()}>Logout</button></em>
                : null
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h1>Blog List</h1>
      </div>
      <div >
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
              <Switch>

                <Route path="/blogs/:id">
                  <BlogDetail blog={blog}/>
                </Route>
                <Route path="/users/:id">
                  <UsersBlogsDetails />
                </Route>
                <Route path="/users">
                  <UsersBlogsCountInfo />
                </Route>
                <Route path="/">
                  <BlogMain />
                </Route>
              </Switch>
            </>
          )
        }
      </div>
    </Container>
  )
}

const stateToPropsMap = (state) => {
  return{
    user: state.user,
    blogs: state.blogs
  }
}

export default connect(stateToPropsMap, { setNotification,setUser, cleanUser, initBlog })(App)
