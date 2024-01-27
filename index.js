const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3hdabzk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    //   collections
    const courseCollection = client.db("Edtech").collection("courses")
    const reviewCollection = client.db("Edtech").collection("reviews")
    const userCollection = client.db("Edtech").collection('users');

    // -----------------------JWT related API ----------------
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      res.send({ token });
    });

    // MiddleWares
    const verifyToken = (req, res, next) => {
      console.log('Inside verify Token', req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Unauthorized access' });
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'Unauthorized access' });
        }
        req.decoded = decoded;
        next();
      })
    };

    // use verifyAdmin after verifyToken
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === 'admin';
      if (!isAdmin) {
          return res.status(403).send({ message: 'forbidden Access' });
      }

      next();
  }

    // ---------------------------User related Apis----------------

    app.get('/users', async (req, res) => {

      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      if (req.query?.name) {
        query = { name: new RegExp(req.query.name, 'i') };
      }

      const result = await userCollection.find(query).toArray();
      res.send(result);
    });

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    app.get('/users/admin/:email', async (req, res) => {
      const email = req.params.email;
      if (!email === req?.decoded?.email) {
          return res.status(403).send({ message: 'Forbidden Access' });
      }

      const query = { email: email };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
          admin = user?.role === 'admin';
      }
      res.send({ admin });
  });

    app.post('/users', async (req, res) => {
      const user = req.body;
      // checking user exist or not
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exist', insertedId: null });
      }

      const result = await userCollection.insertOne(user);
      res.send(result);
    });


    // ---------------------------all courses apis ----------------

    //  get api  
    app.get('/courses', async (req, res) => {
      try {
        const result = await courseCollection.find().toArray()
        res.send(result)
      } catch (error) {
        console.log(error);
      }
    })

    //------------------------  review apis--------------------
    app.get("/reviews", async (req, res) => {
      try {
        const result = await reviewCollection.find().toArray()
        res.send(result)
      } catch (error) {
        console.log(error);
      }
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
  res.send('our server is running');
})

app.listen(port, () => {
  console.log(`server is running on port:${port}`)
})