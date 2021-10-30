
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNotification } from '../reducer/NotificactionReducer'
import {  newBlog } from '../reducer/BlogReducer'
import { Form, Button  } from 'react-bootstrap'


const BlogNew = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const blog = { title, author, url }
    props.newBlog(blog,props.user.token)
    props.setNotification({ content: `A new Blog ${blog.title} by ${blog.author} added`, className: 'success' }, 5)
    setAuthor('')
    setTitle('')
    setUrl('')
    props.blogRef.current.toggleVisibility()
  }

  return (
    <>
      <h3>Create new blog</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={title}
            id="inputTitle"
            onChange={({ target }) => setTitle(target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={author}
            id="inputAuthor"
            onChange={({ target }) => setAuthor(target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>URL</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={url}
            id="inputUrl"
            onChange={({ target }) => setUrl(target.value)} />
        </Form.Group>
        <Button size="sm" variant="outline-primary" type="submit" id="buttonCreateBlog">Create</Button>
      </Form>
    </>
  )
}


const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps,  { setNotification,  newBlog })(BlogNew)
