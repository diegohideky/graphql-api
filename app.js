const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

mongoose.connect('mongodb://localhost/net-ninja')

mongoose.connection.on('open', () => {
  console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log('Listening to port 4000'));
