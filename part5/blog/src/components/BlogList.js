
import React from 'react'
import BlogItem from './BlogItem'
import TogglableBlogItem from './TogglableBlogItem'
import BlogDetail from './BlogDetail'
import PropTypes from 'prop-types'

const BlogList = ({ blogs, setBlogs }) =>
  [].concat(blogs)
    .sort((a, b) => a.likes < b.likes ? 1 : -1)
    .map(blog => {
      return (
        <div key={blog.id} className="blogStyle">
          <BlogItem blog={blog} />
          <TogglableBlogItem buttonShow='view' buttonHide="hide">
            <BlogDetail blog={blog} blogs={blogs} setBlogs={setBlogs} />
          </TogglableBlogItem>
        </div>
      )
    })

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired
}

export default BlogList
