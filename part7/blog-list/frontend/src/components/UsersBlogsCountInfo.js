import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { groupBy, keys } from 'lodash'
import { Link } from 'react-router-dom'

const UsersBlogsCountInfo = (props) => {
  const usuarios = groupBy(props.blogs,'user.name')
  console.log(usuarios)

  return(
    <>
      <h2>Users</h2>
      <Table striped>
        <thead>
          <tr>
            <td></td>
            <td>blogsCreated</td>
          </tr>
        </thead>
        <tbody>
          {keys(usuarios).map((author, index) => {return(
            <tr key={index}>
              <td>
                <Link to={`/users/${usuarios[author][0].user.id}`}>{author}</Link>
              </td>
              <td>
                {usuarios[author].length}
              </td>
            </tr>
          )})}
        </tbody>
      </Table>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(UsersBlogsCountInfo)