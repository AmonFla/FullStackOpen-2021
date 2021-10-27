const supertest = require('supertest')
const mongoose = require('mongoose')
const bh = require('./blog.helper')
const uh = require('./user.helper')
const app = require('../../app')
const api = supertest(app)

const getLoginToken = async (index) => {
  const login = await api.post(uh.loginRoute)
    .send({ username: uh.initData[index].username, password: uh.initData[index].password })
    .expect(200)
  return login.body.token
}

beforeEach(async () => {
  await bh.initTest()
})

afterAll(() => mongoose.connection.close())

describe('TG-BLOG-01 GET All Blogs Post', () => {
  test('TC-BLOG-01-01 Content-Type is Json', async () => {
    await api.get(bh.baseRoute)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('TC-BLOG-01-02 Correct amount of blog', async () => {
    const blogs = await api.get(bh.baseRoute)
    expect(blogs.body).toHaveLength(bh.initData.length)
  })
})

describe('TG-BLOG-02 Blog Format', () => {
  test('TC-BLOG-02-01 Correct id property', async () => {
    const blogs = await api.get(bh.baseRoute)
    expect(blogs.body[0].id).toBeDefined()
  })

  test('TC-BLOG-02-02 Correct _id & __v  deleted', async () => {
    const blogs = await api.get(bh.baseRoute)
    expect(blogs.body[0]._id).not.toBeDefined()
    expect(blogs.body[0].__v).not.toBeDefined()
  })
})

describe('TG-BLOG-03 POST Entry to Blog', () => {
  beforeEach(async () => {
    await uh.initTest()
  })

  test('TC-BLOG-03-01 Add new entry - Validate amount of post', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    const token = await getLoginToken(0)
    await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const dataAfterPost = await bh.getAllPost()
    expect(dataAfterPost).toHaveLength(bh.initData.length + 1)
  })

  test('TC-BLOG-03-02 Add new entry - Validate content', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    const token = await getLoginToken(0)
    await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const dataAfterPost = await bh.getAllPost()
    const titles = dataAfterPost.map(r => r.title)
    expect(titles).toContainEqual(post.title)
  })

  test('TC-BLOG-03-03 Add new entry - Validate likes default 0', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url'
    }

    const token = await getLoginToken(0)
    const afterPost = await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(afterPost.body.likes).toBe(0)
  })

  test('TC-BLOG-03-04 Add new entry - Validate not title and url', async () => {
    const post = {
      author: 'Test Author',
      likes: 0
    }
    const token = await getLoginToken(0)

    await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(400)
  })

  test('TC-BLOG-03-05 Add new entry - No Token', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    await api.post(bh.baseRoute)
      .send(post)
      .expect(401)
  })

  test('TC-BLOG-03-06 Add new entry - Invalid Token', async () => {
    const post = {
      title: 'Test new entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer 21354612532148161')
      .send(post)
      .expect(401)
  })
})

describe('TG-BLOG-04 DELETE Entry', () => {
  test('TC-BLOG-04-01 Delete entry by own user', async () => {
    const post = {
      title: 'Test delete entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    const token = await getLoginToken(0)
    const postData = await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)

    await api.delete(`${bh.baseRoute}/${postData.body.id}`)
      .set('Authorization', 'Bearer ' + token)
      .expect(204)

    const data = await bh.getOne(postData.body.id)

    expect(data).toBe(null)
  }, 10000)

  test('TC-BLOG-04-02 Delete entry by other user', async () => {
    const post = {
      title: 'Test delete entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    let token = await getLoginToken(0)
    const postData = await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)

    token = await getLoginToken(1)
    await api.delete(`${bh.baseRoute}/${postData.body.id}`)
      .set('Authorization', 'Bearer ' + token)
      .expect(401)

    const data = await bh.getOne(postData.body.id)
    expect(data).not.toBe(null)
  })

  test('TC-BLOG-04-03 Delete entry no token', async () => {
    const post = {
      title: 'Test delete entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    const token = await getLoginToken(0)
    const postData = await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)

    await api.delete(`${bh.baseRoute}/${postData.body.id}`)
      .expect(401)

    const data = await bh.getOne(postData.body.id)
    expect(data).not.toBe(null)
  })

  test('TC-BLOG-04-04 Delete entry invalid token', async () => {
    const post = {
      title: 'Test delete entry',
      author: 'Test Author',
      url: 'http://test.url',
      likes: 10
    }
    const token = await getLoginToken(0)
    const postData = await api.post(bh.baseRoute)
      .set('Authorization', 'Bearer ' + token)
      .send(post)
      .expect(201)

    await api.delete(`${bh.baseRoute}/${postData.body.id}`)
      .set('Authorization', 'Bearer 21354612532148161')
      .expect(401)

    const data = await bh.getOne(postData.body.id)
    expect(data).not.toBe(null)
  })
})

describe('TG-BLOG-05 PUT Entry', () => {
  test('TC-BLOG-05-01 Update entry', async () => {
    const entries = await bh.getAllPost()

    entries[0].likes = entries[0].likes * 10
    await api.put(`${bh.baseRoute}/${entries[0].id}`)
      .send(entries[0])
      .expect(200)

    const afterUpdate = await bh.getOne(entries[0].id)
    expect(afterUpdate.likes).toBe(entries[0].likes)
  })
})

describe('TG-BLOG-06 PATCH Entry', () => {
  test('TC-BLOG-06-01 Update entry', async () => {
    const entries = await bh.getAllPost()

    await api.patch(`${bh.baseRoute}/${entries[0].id}`)
      .send({ likes: 200 })
      .expect(200)

    const afterUpdate = await bh.getOne(entries[0].id)
    expect(afterUpdate.likes).toBe(200)
  })
})
