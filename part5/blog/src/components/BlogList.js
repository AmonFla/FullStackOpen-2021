
import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)
export default BlogList
