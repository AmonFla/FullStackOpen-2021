import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'



import BlogNew from '../../components/BlogNew'

describe('<BlogNew /> ... testing', () => {
  let component
  let createBlog

  beforeEach(() => {

    localStorage.setItem('user',JSON.stringify({ token:'TOKEN',username:'root' }))
    createBlog = jest.fn()

    component = render(
      <BlogNew createBlog={createBlog} />
    )

  })


  test('post new entry', () => {

    const title = component.container.querySelector('#inputTitle')
    const author = component.container.querySelector('#inputAuthor')
    const url = component.container.querySelector('#inputUrl')
    const form = component.container.querySelector('form')

    fireEvent.change(title, { target:{ value:'test title entry' } })
    fireEvent.change(author, { target:{ value:'test author entry' } })
    fireEvent.change(url, { target:{ value:'test url entry' } })

    fireEvent.submit(form)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].title).toBe('test title entry')
    expect(createBlog.mock.calls[0][0].author).toBe('test author entry')
    expect(createBlog.mock.calls[0][0].url).toBe('test url entry')

  })

})