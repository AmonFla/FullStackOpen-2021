
import React from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const BlogList = (props) => (
  <div>
    <h3>Lista de blogs</h3>
    <Table striped>
      <tbody>
        {[].concat(props.blogs)
          .map(blog =>
            <tr key={blog.id}>
              <td>
                <Link to={`/blogs/${blog.id}`}><BlogItem blog={blog} /></Link>
              </td>
            </tr>
          )
        }

      </tbody>
    </Table>
  </div>
)



const mapStateToProps = (state) => {
  return{
    blogs : state.blogs
      .sort((a, b) => a.likes < b.likes ? 1 : -1)
  }
}
export default connect(mapStateToProps)(BlogList)
