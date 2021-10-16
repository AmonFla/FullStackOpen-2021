
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogNew = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const blog = { title, author, url }
    createBlog(blog)
    setAuthor('')
    setTitle('')
    setUrl('')

  }

  return (
    <>
      <h3>Create new blog</h3>
      <form onSubmit={onSubmit}>
        <div>
                Title : <input type="text" value={title} name="Title" id="Title" onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
                Author: <input type="text" value={author} name="Author" id="Author" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
                Url: <input type="text" value={url} name="Url" id="Url" onChange={({ target }) => setUrl(target.value)} />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  )
}

BlogNew.propTypes = {
  createBlog: PropTypes.func.isRequired
}
export default BlogNew
