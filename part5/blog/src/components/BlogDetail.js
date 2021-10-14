import React from 'react'
import servBlog from '../service/blogs'

const BlogDetail = ({ blog, blogs, setBlogs }) => {
  const likes = async () => {
    blog.likes++

    const user = JSON.parse(window.localStorage.getItem('user'))
    servBlog.setToken(user.token)
    await servBlog.update(blog)
    const updatedBlogs = blogs.map(b => b.id === blog.id ? { ...b, likes: b.likes++ } : b)
    setBlogs(updatedBlogs)
  }

  const remove = async () => {
    if (window.confirm(`Remove Blog ${blog.title} by ${blog.author}`)) {
      const user = JSON.parse(window.localStorage.getItem('user'))
      servBlog.setToken(user.token)
      await servBlog.remove(blog)
      const updatedBlogs = blogs.filter(b => b.id !== blog.id)
      setBlogs(updatedBlogs)
    }
  }

  return (

    <>
        {blog.url} <br />
        {blog.likes} <button onClick={() => likes()}>like</button><br />
        {blog.author} <br />
        {JSON.parse(window.localStorage.getItem('user')).username === blog.user.username ? <button onClick={() => remove()} >remove</button> : ('') }
    </>
  )
}

export default BlogDetail
