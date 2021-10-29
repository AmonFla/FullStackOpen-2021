
import React from 'react'

const Comment = ({ comments }) => {

  if (!comments){
    return null
  }

  return(
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment,index) => <li key={index}>{comment}</li> )}
      </ul>
    </div>
  )

}


export default Comment
