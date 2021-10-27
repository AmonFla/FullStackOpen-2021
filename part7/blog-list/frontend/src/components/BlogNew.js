
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setNotification } from '../reducer/NotificactionReducer'
import {  newBlog } from '../reducer/BlogReducer'

const BlogNew = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const blog = { title, author, url }
    props.newBlog(blog)
    props.setNotification({ content: `A new Blog ${blog.title} by ${blog.author} added`, className: 'success' }, 5)
    setAuthor('')
    setTitle('')
    setUrl('')
    props.blogRef.current.toggleVisibility()
  }

  return (
    <>
      <h3>Create new blog</h3>
      <form onSubmit={onSubmit}>
        <div>
                Title : <input type="text" value={title} name="Title" id="inputTitle" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
                Author: <input type="text" value={author} name="Author" id="inputAuthor" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
                Url: <input type="text" value={url} name="Url" id="inputUrl" onChange={({ target }) => setUrl(target.value)} />
        </div>
        <div>
          <button type="submit" id="buttonCreateBlog">Create</button>
        </div>
      </form>
    </>
  )
}


export default connect(null, { setNotification,  newBlog })(BlogNew)
