const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 5000
//cleanCo
//b8a8W4dSAgUSevnj


//parser 
app.use(express.json())



//Mongo URI
const uri = "mongodb+srv://cleanCo:b8a8W4dSAgUSevnj@cluster0.guubgk2.mongodb.net/cleanCo?retryWrites=true&w=majority";

// Connect MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('cleanCo').collection('services');
    const bookingCollection = client.db('cleanCo').collection('bookings');

    app.get('/api/v1/services', async(req,res)=>{
        const cursor = serviceCollection.find();
        const result = await cursor.toArray()
        res.send(result)
    })

    app.post('/api/v1/user-bookings', async(req,res)=>{
        const booking = req.body;
        const result = await bookingCollection.insertOne(booking)
        res.send(result)
    })

    app.delete('/api/v1/cancel-booking/:bookingID', async(req,res)=>{
        const bookingId = req.params.bookingID;
        const query = {_id : new ObjectId(bookingId)}
        const result = await bookingCollection.deleteOne(query)
        res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Clean Co App listening on port ${port}`)
})