import React, { useRef, useState, useEffect } from 'react'
import BlogNew from './BlogNew'
import Toggleable from './Togglable'
import BlogList from './BlogList'
import servBlog from '../service/blogs'
import { connect } from 'react-redux'
import { setNotification } from '../reducer/NotificactionReducer'

const BlogMain = (props) => {
  const [blogs, setBlogs] = useState([])
  const blogRef = useRef()

  useEffect(() => {
    servBlog.getAll().then(blogs => setBlogs(blogs))
  }, [])

  const createBlog = async (blog) => {
    blogRef.current.toggleVisibility()
    const user = JSON.parse(localStorage.getItem('user'))
    servBlog.setToken(user.token)
    const newBlog = await servBlog.create(blog)
    setBlogs(blogs.concat(newBlog))
    props.setNotification({ content: `A new Blog ${blog.title} by ${blog.author} added`, className: 'success' }, 5)
  }

  const updateBlog = async(blog) => {
    const user = JSON.parse(localStorage.getItem('user'))
    servBlog.setToken(user.token)
    await servBlog.update(blog)
    const updatedBlogs = blogs.map(b => b.id === blog.id ? { ...b, likes: b.likes++ } : b)
    setBlogs(updatedBlogs)
  }

  const deletedBlog = async(blog) => {
    const user = JSON.parse(localStorage.getItem('user'))
    servBlog.setToken(user.token)
    await servBlog.remove(blog)
    const updatedBlogs = blogs.filter(b => b.id !== blog.id)
    setBlogs(updatedBlogs)
  }

  return(
    <>
      <Toggleable buttonShow='Create new blog' buttonHide='Cancel action' ref={blogRef}>
        <BlogNew createBlog={createBlog} />
      </Toggleable>
      <br />
      <br />
      <div className="testBlogList">
        <BlogList blogs={blogs} updateBlog={updateBlog} deleteBlog={deletedBlog}/>
      </div>
    </>
  )
}

export default connect(null, { setNotification })(BlogMain)

