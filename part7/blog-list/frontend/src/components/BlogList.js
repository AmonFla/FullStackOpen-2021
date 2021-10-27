
import React from 'react'
import BlogItem from './BlogItem'
import TogglableBlogItem from './TogglableBlogItem'
import BlogDetail from './BlogDetail'
import { connect } from 'react-redux'

const BlogList = (props) =>
  [].concat(props.blogs)
    .map(blog => {
      return (
        <div key={blog.id} className="blogStyle">
          <BlogItem blog={blog} />
          <TogglableBlogItem buttonShow='view' buttonHide="hide">
            <BlogDetail blog={blog} />
          </TogglableBlogItem>
        </div>
      )
    })


const mapStateToProps = (state) => {
  return{
    blogs : state.blogs
      .sort((a, b) => a.likes < b.likes ? 1 : -1)
  }
}
export default connect(mapStateToProps)(BlogList)
