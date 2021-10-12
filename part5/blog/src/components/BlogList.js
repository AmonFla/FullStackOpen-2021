
import React from 'react'
import BlogItem from './BlogItem'
import TogglableBlogItem from './TogglableBlogItem'
import BlogDetail from './BlogDetail'

const BlogList = ({ blogs, setBlogs }) =>
  blogs.map(blog => {
    return (
            <div key={blog.id} className="blogStyle">
                <BlogItem key={blog.id} blog={blog} />
                <TogglableBlogItem key={blog.id} buttonShow='view' buttonHide="hide">
                    <BlogDetail key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} />
                </TogglableBlogItem>
            </div>
    )
  })
export default BlogList
