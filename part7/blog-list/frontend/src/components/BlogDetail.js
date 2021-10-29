import React from 'react'
import { connect } from 'react-redux'
import { updateBlog, deleteBlog } from '../reducer/BlogReducer'
import { useHistory } from 'react-router-dom'

const BlogDetail = (props) => {
  const history = useHistory()

  if (!props.blog)
    return null

  const likes = async () => {
    props.updateBlog({ ...props.blog, likes: props.blog.likes+1 },props.user.token)
  }

  const remove = async () => {
    if (window.confirm(`Remove Blog ${props.blog.title} by ${props.blog.author}`)) {
      props.deleteBlog(props.blog,props.user.token)
      history.push('/')
    }
  }

  return (
    <>
      <h2>{props.blog.title} by {props.blog.title}</h2>

      {props.blog.url}<br />
      {props.blog.likes} likes <button onClick={() => likes()} id="buttonLike" >like</button><br />
       added by {props.blog.user.name} <br />
      {props.user.username === props.blog.user.username ? <button onClick={() => remove()} >remove</button> : ('') }
    </>
  )
}



const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, { updateBlog, deleteBlog })(BlogDetail)
