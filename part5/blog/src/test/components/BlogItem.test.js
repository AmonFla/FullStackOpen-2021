import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import BlogItem from '../../components/BlogItem'


describe('<BlogItem /> ... testing',() => {
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


    component = render(
      <BlogItem blog={blog} />
    )
  })

  test('renders content', () => {

    expect(component.container.querySelector('.testBlogItem')).toHaveTextContent('BlogItem Test - Test Author')
    expect(component.queryByText('10')).not.toBeInTheDocument()
    expect(component.queryByText('http://test.com')).not.toBeInTheDocument()

  })
})