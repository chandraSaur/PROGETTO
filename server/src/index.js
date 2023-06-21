import express from 'express'
import session from 'express-session'
import 'dotenv/config'
import {runConnection, insertUser} from './woanderDB.mjs'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())

runConnection()  //connect to DB

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req, res) => {
  const user = req.body;
  insertUser(user)
  res
    .status(201)
    .send('Lo user è stato creato correttamente')
    
    .end()
} ) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// creare collection nel db per: users, schede, liste (sono insiemi omogenei di dati), (itinerari forse)
// si connettono tra loro attraverso un id univoco, lo username, ecc.