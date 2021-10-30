import React from 'react'
import { connect } from 'react-redux'
import { updateBlog, deleteBlog } from '../reducer/BlogReducer'
import { useHistory } from 'react-router-dom'
import  Comments  from './Comments'
import {  Button , Card } from 'react-bootstrap'

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
      <Card>
        <Card.Body>

          <p>{props.blog.url}</p>
          <p>{props.blog.likes} likes <Button size="sm" onClick={() => likes()} ariant="info" >like</Button></p>
          <p> added by {props.blog.user.name} </p>
          <p>{props.user.username === props.blog.user.username ? <Button variant="danger" size="sm" onClick={() => remove()} >remove</Button> : ('') }</p>
          <br />
          <br />
          <Comments id={props.blog.id} comments={props.blog.comment} />

        </Card.Body>
      </Card>
    </>
  )
}



const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, { updateBlog, deleteBlog })(BlogDetail)
