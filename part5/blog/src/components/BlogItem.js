import React from 'react'

const BlogItem = ({ blog }) => (
    <div>
        {blog.title} - {blog.author}
    </div>
)

export default BlogItem
