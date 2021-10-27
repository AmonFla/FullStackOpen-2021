import React from 'react'
import PropTypes from 'prop-types'

const BlogDetail = ({ blog, updateBlog, deleteBlog }) => {
  const likes = async () => {
    blog.likes++
    updateBlog(blog)
  }

  const remove = async () => {
    if (window.confirm(`Remove Blog ${blog.title} by ${blog.author}`)) {
      deleteBlog(blog)
    }
  }

  return (

    <span className="testBlogDetail">
      <span className="testBlogDetailUrl">{blog.url}</span><br />
      <span className="testBlogDetailLikes">{blog.likes}</span><button onClick={() => likes()} id="buttonLike" >like</button><br />
      {blog.user.name} <br />
      {JSON.parse(localStorage.getItem('user')).username === blog.user.username ? <button onClick={() => remove()} >remove</button> : ('') }
    </span>
  )
}

BlogDetail.propTypes = {
  blog: PropTypes.object.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}
export default BlogDetail
