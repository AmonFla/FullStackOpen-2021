import React, { useRef, useState, useEffect } from 'react'
import BlogNew from './BlogNew'
import Toggleable from './Togglable'
import BlogList from './BlogList'
import servBlog from '../service/blogs'

const BlogMain = ({ setNotificationMessage }) => {
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
    setNotificationMessage({ content: `A new Blog ${blog.title} by ${blog.author} added`, className: 'success' })
    setTimeout(() => { setNotificationMessage({ content: null, className: '' }) }, 5000)
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
      <BlogList blogs={blogs} updateBlog={updateBlog} deleteBlog={deletedBlog}/>
    </>
  )
}

export default BlogMain
