const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const app = express()
const port = 5000

const secret = 'veryverysecretthings'

//cleanCo
//b8a8W4dSAgUSevnj


//parser 
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin : 'http://localhost:5173',
  credentials : true
}))



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

    

    app.post('/api/v1/auth/access-token', async(req,res)=>{
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user,secret, {expiresIn: 60 * 60});
      res.cookie('token',token,{
        httpOnly : true,
        secure : true,
        sameSite : 'none'
      }).send({success:true})
    })

    //middlewares 
    //to verify authorized user
    const gateman = (req,res, next)=>{
      const {token} = req.cookies
      if(!token){
        return res.status(401).send({message:"Unauthorized Access"})
      }

      jwt.verify(token, secret, function(err, decoded){
        if(err){
          return res.status(401).send({message:"Unauthorized Access"})
        }
        req.user = decoded.email
        next()
      })

    }


    app.get('/api/v1/services', async(req,res)=>{
        let query = {}
        let sortObj ={}
        const category = req.query.category;
        const sortField = req.query.sortField;
        const sortOrder = req.query.sortOrder;
        if(sortField && sortOrder){
          sortObj[sortField] = sortOrder
        }
        if(category){
          query.category= category
        }

        //pagination
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const skip = (page-1)*limit;
        //find out total data
        const total = await serviceCollection.countDocuments();
        const cursor = serviceCollection.find(query).skip(skip).limit(limit).sort(sortObj);
        const result = await cursor.toArray()
        res.send({total, result})
    })

    app.get('/api/v1/user/bookings', gateman, async(req,res)=>{
     const queryEmail = req.query.email;
     const tokenEmail = req.user
      if(queryEmail === tokenEmail){
        return res.status(403).send({message : "forbidden"})
      }

      let query = {}

      if(queryEmail){
        query.email = queryEmail
      }

      const result = await bookingCollection.find(query).toArray()
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