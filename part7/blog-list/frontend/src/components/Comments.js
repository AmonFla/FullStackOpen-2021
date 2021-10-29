
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../reducer/BlogReducer'

const Comment = ( props) => {
  const [comment, setComment ] = useState()

  const onSubmit = async (event) => {
    event.preventDefault()
    props.addComment({ comment }, props.id,props.user.token)
  }

  return(
    <div>
      <h3>Comments</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={comment} name="Comment" id="inputComment" onChange={({ target }) => setComment(target.value)} />
        <button type="submit" id="buttonCreateCommand">Create</button>
      </form>
      <ul>
        {props.comments.map((comment,index) => <li key={index}>{comment}</li> )}
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, { addComment })(Comment)
