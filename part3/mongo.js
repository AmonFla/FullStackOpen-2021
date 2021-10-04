const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('commmand format: node mongo.js <password> <name> <phone number>, where name and phone number are optionals')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.x3hp4.mongodb.net/phone-book?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name : String,
  number: String
})

const Person = mongoose.model('Person', personSchema )

if (process.argv.length > 3){
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then( () => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}else{
  Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(element => console.log(element.name, element.number))
    mongoose.connection.close()
  })
}


