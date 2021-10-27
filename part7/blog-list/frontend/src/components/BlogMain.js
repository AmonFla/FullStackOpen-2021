import React, { useRef, useEffect } from 'react'
import BlogNew from './BlogNew'
import Toggleable from './Togglable'
import BlogList from './BlogList'
import { connect } from 'react-redux'
import { initBlog } from '../reducer/BlogReducer'
import { useDispatch } from 'react-redux'


const BlogMain = () => {
  const blogRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initBlog())
  },[dispatch])

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

export default connect(null, { initBlog })(BlogMain)

