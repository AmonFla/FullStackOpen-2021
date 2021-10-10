
import React, { useState } from 'react'
import servBlog from '../service/blogs'

const NewBlog = ({ blogs, setBlogs, setNotificationMessage }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const blog = { title, author, url }
    const user = JSON.parse(window.localStorage.getItem('user'))
    servBlog.setToken(user.token)
    const newBlog = await servBlog.create(blog)
    setBlogs(blogs.concat(newBlog))
    setNotificationMessage({ content: `A new Blog ${title} by ${author} added`, className: 'success' })
  }

  return (
    <div>
        <h3>Create new blog</h3>
        <form onSubmit={onSubmit}>
            <div>
                Title : <input type="text" value={title} name="Title" onChange={({ target }) => setTitle(target.value)} />
            </div>
            <div>
                Author: <input type="text" value={author} name="Author" onChange={({ target }) => setAuthor(target.value)} />
            </div>
            <div>
                Url: <input type="text" value={url} name="Url" onChange={({ target }) => setUrl(target.value)} />
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
        <br />
    </div>
  )
}
export default NewBlog
