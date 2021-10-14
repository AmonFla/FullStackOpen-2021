
import React from 'react'
import BlogItem from './BlogItem'
import TogglableBlogItem from './TogglableBlogItem'
import BlogDetail from './BlogDetail'

const BlogList = ({ blogs, setBlogs, user }) =>
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
export default BlogList
