
import React from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = (props) =>
  [].concat(props.blogs)
    .map(blog => {
      return (
        <div key={blog.id} className="blogStyle">
          <Link to={`/blogs/${blog.id}`}><BlogItem blog={blog} /></Link>
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
