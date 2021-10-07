const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('Total Likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog equals tje likes of that', () => {
    const blogs = [{
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 10
    }]

    expect(listHelper.totalLikes(blogs)).toBe(10)
  })

  test('of a bigger list is calculated right', () => {
    const blogs = [{
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 10
    }, {
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 5
    }, {
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 6
    }]

    expect(listHelper.totalLikes(blogs)).toBe(21)
  })
})

describe('Favorite Blog', () => {
  test('most liked post', () => {
    const blogs = [{
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 10
    }, {
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 5
    }, {
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 66
    }]

    expect(listHelper.favoriteBlog(blogs)).toEqual(blogs[2])
  })
})

describe('Most Blog', () => {
  test('most post', () => {
    const blogs = [{
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 10
    }, {
      title: 'Hola Mundo',
      author: 'Yo y que',
      url: 'http://algun.lugar',
      likes: 5
    }, {
      title: 'Hola Mundo',
      author: 'El que escribio',
      url: 'http://algun.lugar',
      likes: 66
    }]
    expect(listHelper.mostBlog(blogs)).toEqual('El que escribio')
  })
})
