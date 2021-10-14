import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = ({ blog }) => (
  <>
    {blog.title} &nbsp;
  </>
)

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired
}
export default BlogItem
