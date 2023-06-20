import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function runConnection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

export async function insert() {  
//funzione che sarà chiamata ogniqualvolta si vorrà inserire qualcosa in una collection (che è un oggetto)
//se ad esempio viene chiamata insertUser avrà come parametro lo user da inserire insertUser(user)
  try {
    const database = client.db(process.env.NAME_DB);
    //creo la collection su ATLAS, in questo caso la coll. degli user
    //su Browse Collections e la chiamo users. 
    const usersCollection = database.collection("users");
    const result = await usersCollection.insertOne(users);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
