import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import BlogDetail from '../../components/BlogDetail'


describe('<BlogDetail /> ... testing', () => {
  let component
  let blog
  let updateBlog
  let deleteBlog

  beforeEach(() => {
    blog = {
      title: 'BlogItem Test',
      author: 'Test Author',
      url: 'http://test.com',
      likes: 10,
      user:{
        username:'root',
        name:'System Admin'
      }
    }

    localStorage.setItem('user',JSON.stringify({ token:'TOKEN',username:'root' }))
    updateBlog = jest.fn()
    deleteBlog = jest.fn()

    component = render(
      <BlogDetail blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
    )

  })


  test('likes clicked twice', () => {

    const buttonLike = component.getByText('like')

    fireEvent.click(buttonLike)
    fireEvent.click(buttonLike)

    expect(blog.likes).toBe(12)
    const element = component.container.querySelector('.testBlogDetailUrl')
    expect(element).toHaveTextContent('http://test.com')

  })

})