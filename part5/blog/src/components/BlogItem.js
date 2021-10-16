import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = ({ blog }) => (
  <span className="testBlogItem">
    {blog.title} - {blog.author} &nbsp;
  </span>
)

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired
}
export default BlogItem
