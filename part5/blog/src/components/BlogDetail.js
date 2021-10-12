import React from 'react'

const BlogDetail = ({ blog }) => (
    <>
        {blog.url} <br />
        {blog.likes} <button>like</button><br />
        {blog.author} <br />
    </>
)

export default BlogDetail
