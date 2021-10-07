const _ = require('lodash')
const dummy = (blogs) => 1

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => blog.likes + sum
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (prev, blog) =>
    prev.likes < blog.likes
      ? blog
      : prev

  return blogs.reduce(reducer, blogs[0])
}

const mostBlog = (blogs) => {
  const postByAuthor = _.countBy(blogs, 'author')
  return Object.keys(postByAuthor).reduce((a, b) => postByAuthor[a] > postByAuthor[b] ? a : b)
}

const mostLiked = (blogs) => {
  const reducer = (prev, blog) => {
    _.has(prev, blog.author)
      ? prev[blog.author] += blog.likes
      : _.set(prev, [blog.author], blog.likes)
    return prev
  }
  const mostLiked = blogs.reduce(reducer, {})

  return Object.keys(mostLiked).reduce((a, b) => mostLiked[a] > mostLiked[b] ? a : b)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlog,
  mostLiked
}
