import React, { useRef } from 'react'
import BlogNew from './BlogNew'
import Toggleable from './Togglable'
import BlogList from './BlogList'


const BlogMain = () => {
  const blogRef = useRef()


  return(
    <>
      <Toggleable buttonShow='Create new blog' buttonHide='Cancel action' ref={blogRef}>
        <BlogNew blogRef={blogRef} />
      </Toggleable>
      <br />
      <br />
      <div className="testBlogList">
        <BlogList />
      </div>
    </>
  )
}

export default BlogMain

