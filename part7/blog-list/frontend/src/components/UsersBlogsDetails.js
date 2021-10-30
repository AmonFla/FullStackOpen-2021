import React from 'react'
import { connect } from 'react-redux'
import { groupBy } from 'lodash'
import { useParams, Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const UsersBlogsDetails = (props) => {
  const id = useParams().id
  const data = groupBy(props.blogs,'user.id')[id]
  console.log(data)

  console.log(useParams().id)
  return(
    <>
      <h2>{data[0].user.name}</h2>
      <ListGroup as="ol" numbered>
        {data.map( b => {
          return(
            <ListGroup.Item as="li" key={b.id}><Link to={`/blogs/${b.id}`}>{b.title}</Link></ListGroup.Item>
          )
        })}
      </ListGroup>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(UsersBlogsDetails)