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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
