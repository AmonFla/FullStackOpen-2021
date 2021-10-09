const supertest = require('supertest')
const mongoose = require('mongoose')
const h = require('./user.helper')
const app = require('../../app')
const api = supertest(app)

const User = require('../../models/user')

beforeEach(async () => {
  await User.deleteMany({})
  await User.insertMany(h.initData)
}, 10000)

afterAll(() => mongoose.connection.close())

describe('TG-USER-01 GET data', () => {
  test('TC-USER-01-01 - GET give correct content type', async () => {
    await api.get(h.baseRoute)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('TC-USER-01-02 - GET all users', async () => {
    const allData = await api.get(h.baseRoute)
    expect(allData.body).toHaveLength(h.initData.length)
  })
})

describe('TG-USER-02 POST data', () => {
  test('TC-USER-02-01 - Correct adding user', async () => {
    const user = {
      username: 'newuser',
      password: '123456',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const afterPost = await h.getAll()
    expect(afterPost).toHaveLength(h.initData.length + 1)
  })

  test('TC-USER-02-02 - Username must be unique', async () => {
    const users = h.initData
    await api.post(h.baseRoute)
      .send(users[0])
      .expect(400)
  })

  test('TC-USER-02-03 - Username required', async () => {
    const user = {
      password: '123456',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-04 - Password required', async () => {
    const user = {
      username: 'newuser',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-05 - Username and Password required', async () => {
    const user = {
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-06 - Username must be 3 characters long', async () => {
    const user = {
      username: 'ne',
      password: '123456',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-07 - Password must be 3 characters long', async () => {
    const user = {
      username: 'newuser',
      password: '12',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })

  test('TC-USER-02-08 - Username and Password must be 3 characters long', async () => {
    const user = {
      username: 'ne',
      password: '12',
      name: 'New User'
    }

    await api.post(h.baseRoute)
      .send(user)
      .expect(400)
  })
})
