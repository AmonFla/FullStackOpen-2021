import React from 'react'
import { connect } from 'react-redux'
import { groupBy } from 'lodash'
import { useParams } from 'react-router-dom'

const UsersBlogsDetails = (props) => {
  const id = useParams().id
  const data = groupBy(props.blogs,'user.id')[id]
  console.log(data)

  console.log(useParams().id)

  return(
    <>
      <h2>{data[0].user.name}</h2>
      <ul>
        {data.map( b => {
          return(
            <li key={b.id}>{b.title}</li>
          )
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(UsersBlogsDetails)