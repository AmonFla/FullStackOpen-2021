
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../reducer/BlogReducer'
import { Form, Button, ListGroup, Col, Row } from 'react-bootstrap'

const Comment = ( props) => {
  const [comment, setComment ] = useState()

  const onSubmit = async (event) => {
    event.preventDefault()
    props.addComment({ comment }, props.id,props.user.token)
  }

  return(
    <div>
      <h3>Comments</h3>
      <Form onSubmit={onSubmit}>
        <Row className="align-items-center">
          <Col xs="7">
            <Form.Control
              size="sm"
              type="text"
              value={comment}
              onChange={({ target }) => setComment(target.value)} />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit" variant="success" id="buttonCreateCommand">Create</Button>
          </Col>
        </Row>
      </Form>
      <br />
      <h4>List of Comments </h4>
      <ListGroup as="ol" numbered>
        {props.comments.map((comment,index) => <ListGroup.Item as="li" key={index}>{comment}</ListGroup.Item> )}
      </ListGroup>
    </div>
  )

}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}
export default connect(mapStateToProps, { addComment })(Comment)
