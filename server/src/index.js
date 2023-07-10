import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser' 
import cors from 'cors';  
import 'dotenv/config'
import {runConnection, insertUser, findUser, insertTrip, findTrips, insertElement, deleteTrips, deleteElement, editElement, editTrip} from './woanderDB.mjs'

const app = express()
const port = 8000

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser()); 


const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: process.env.SECRETKEY_SESSION,  
    saveUninitialized:true, 
    cookie: { maxAge: oneDay },  
    resave: false 
}));

runConnection() 

app.post('/signup', async (req, res) => {
  const user = req.body;
  let resultPromise = await insertUser(user)
  if (await resultPromise == 11000){
    res.status(409).send('Username non disponibile');
  } else {
    res
      .status(201)
      .send('Lo user è stato creato correttamente')
  }
  }) 

app.post('/login', async (req, res) => {
  const user = req.body;
  let resultPromise = await findUser(user)
  try {
    if (resultPromise.username == user.username && resultPromise.password == user.password){
      req.session.userid = req.body.username  
      console.log(req.session);
        res
          .status(201)
          .send({message: 'user authenticated'})
    }
  } catch (error) {
    res.status(403).send(`Invalid username or password`);
  }
}) 

app.post('/home/trip', async (req, res) => {
  const trip = req.body;
  let resultPromise = await insertTrip(trip)
  if (await resultPromise == 11000){
    res.status(409).send('Nome già utilizzato');
  } else {
    res
      .status(201)
      .send('Il viaggio è stato inserito correttamente')
  }
})  

app.put('/home/:name', async (req,res) => {  
  const elementName = req.params.name; 
  const newElement = req.body; 
  let result = await insertElement(elementName, newElement)
  res.status(201).end()
})

app.put('/home/:name/elements/:oldItem/:oldQuantity', async (req,res) =>{
  const elementName = req.params.name
  const oldItem = req.params.oldItem
  const oldQuantity = req.params.oldQuantity
  const newElement = req.body; 
  let result = await editElement(elementName, oldItem, oldQuantity, newElement)
  res.status(201).end()
})

app.put('/home/edit/:name', async (req, res) =>{
  const oldTripName = req.params.name
  const newTrip = req.body
  let result = await editTrip (oldTripName, newTrip)
  res.status(201).end()
})

app.get('/home/trips', async(req,res) => {
  res.json(await findTrips())
});

app.delete('/home/:tripDeleted', async (req, res) =>{
  const tripDeleted = req.params.tripDeleted
  let result = await deleteTrips(tripDeleted)
  res.status(201).end()
}) 

app.delete('/home/:name/elements/:deletedItem/:deletedQuantity', async (req, res) =>{
  const name = req.params.name
  const deletedItem = req.params.deletedItem
  const deletedQuantity = req.params.deletedQuantity
  let result = await deleteElement(name, deletedItem, deletedQuantity )
  res.status(201).end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})