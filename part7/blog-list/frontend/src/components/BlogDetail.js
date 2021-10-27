import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateBlog, deleteBlog } from '../reducer/BlogReducer'

const BlogDetail = (props) => {
  const likes = async () => {
    props.updateBlog({ ...props.blog, likes: props.blog.likes+1 })
  }

  const remove = async () => {
    if (window.confirm(`Remove Blog ${props.blog.title} by ${props.blog.author}`)) {
      props.deleteBlog(props.blog)
    }
  }

  return (

    <span className="testBlogDetail">
      <span className="testBlogDetailUrl">{props.blog.url}</span><br />
      <span className="testBlogDetailLikes">{props.blog.likes}</span><button onClick={() => likes()} id="buttonLike" >like</button><br />
      {props.blog.user.name} <br />
      {JSON.parse(localStorage.getItem('user')).username === props.blog.user.username ? <button onClick={() => remove()} >remove</button> : ('') }
    </span>
  )
}

BlogDetail.propTypes = {
  blog: PropTypes.object.isRequired
}
export default connect(null, { updateBlog, deleteBlog })(BlogDetail)
