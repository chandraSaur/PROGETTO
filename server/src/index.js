import express from 'express'
import session from 'express-session'
import 'dotenv/config'
import {runConnection} from './woanderDB.mjs'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())

runConnection()  //connect to DB

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// creare collection nel db per: users, itinerari, liste (sono insiemi omogenei di dati)
// si connettono tra loro attraverso un id univoco, lo username, ecc.