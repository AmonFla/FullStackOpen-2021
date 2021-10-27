import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import TogglableBlogItem from '../../components/TogglableBlogItem'
import BlogDetail from '../../components/BlogDetail'

describe('<TogglableBlogItem /> ... testing', () => {
  let component

  beforeEach(() => {
    const blog = {
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
    const updateBlog = jest.fn()
    const deleteBlog = jest.fn()

    component = render(
      <TogglableBlogItem buttonShow='view' buttonHide="hide">
        <BlogDetail blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
      </TogglableBlogItem>
    )
  })

  test('render url and likes after click', () => {
    const buttonShow = component.getByText('view')
    fireEvent.click(buttonShow)

    let element = component.container.querySelector('.testBlogDetailUrl')
    expect(element).toBeDefined()
    element = component.container.querySelector('.testBlogDetailLikes')
    expect(element).toBeDefined()
  })

})