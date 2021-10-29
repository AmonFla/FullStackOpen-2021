import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { groupBy, keys } from 'lodash'

const UsersBlogsDetails = (props) => {
  console.log(props.blogs)
  const usuarios = groupBy(props.blogs,'user.name')

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
                {author}
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

export default connect(mapStateToProps)(UsersBlogsDetails)