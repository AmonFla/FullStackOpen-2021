require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person')

const app = express()


app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('body', (req) => {return  JSON.stringify(req.body)} )
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const PORT = process.env.PORT || 3001

app.get('/api/persons', (req, res) => {
  Person.find().then(result => res.json(result))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(result => res.json(result))
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })

  person.save()
    .then(result => res.json(result))
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req,res,next) => {
  Person
    .findByIdAndUpdate(req.params.id,{ name:req.body.name, number:req.body.number },{ new: true, runValidators: true })
    .then(resp => res.json(resp))
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
  Person.find().then(result => res.send(`Phonebook has info for ${result.length}<br />${Date()}`))
})

app.use((req,res) => {res.status(404).send({ error: 'unknown endpoint' })})

const errorHandler = (error,req,res,next) => {
  console.error(error.message)
  if(error.name === 'CastError'){
    return res.status(400).send({ error: 'malformatted id' })
  }else if( error.name === 'ValidationError'){
    return res.status(400).send({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})