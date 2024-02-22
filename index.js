// const express = require('express');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const app = express();
// require("dotenv").config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const port = process.env.PORT || 5000;
// const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);

// // // middleware
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());



// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3hdabzk.mongodb.net/?retryWrites=true&w=majority`;

// // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     //     await client.connect();

//     // collections
//     const courseCollection = client.db("Edtech").collection("courses")
//     const reviewCollection = client.db("Edtech").collection("reviews")
//     const userCollection = client.db("Edtech").collection('users');
//     const blogCollection = client.db("Edtech").collection('blogs');
//     const bookingCollection = client.db("Edtech").collection("bookings");
//     const taskcollection = client.db("Edtech").collection('notes');




//     app.get('/addtask', async (req, res) => {
//       const result = await taskcollection.find().toArray();
//       res.send(result);
//     });

 

//     // app.post('/addtask', async (req, res) => {
//     //   const taskadd = req.body;
//     //   const data = {
//     //     title: taskadd.title,
//     //     description: taskadd.description,
//     //     date: taskadd.date,
//     //     priority: taskadd.priority,
//     //     status: 'todo',
//     //   };
//     //   const result = await taskcollection.insertOne(data);
//     //   res.send(result);
//     // });

//     app.patch('/status', async (req, res) => {
//       const id = req.query.id;
//       const data = req.body;
//       const query = { _id: new ObjectId(id) };
//       const updatedDoc = {
//         $set: {
//           status: data.status,
//         },
//       };
//       const result = await taskcollection.updateOne(query, updatedDoc);
//       res.send(result);
//     });

//     app.delete('/delete', async (req, res) => {
//       const id = req.query.id;
//       console.log(id);
//       const query = { _id: new ObjectId(id) };
//       const result = await taskcollection.deleteOne(query);
//       res.send(result);
//     });

//     app.put('/update', async (req, res) => {
//       const id = req.query.id;
//       const filter = { _id: new ObjectId(id) };
//       const data = req.body;
//       const updatedDoc = {
//         $set: {
//           title: data.title,
//           description: data.description,
//           priority: data.priority,
//           deadline: data.deadline,
//           email: data.email,
//         },
//       };
//       const result = await taskcollection.updateOne(filter, updatedDoc);
//       res.send(result);
//     });


//     // create task and component is createTask Modal
//     app.post('/task', async (req, res) => {
//       const data = req.body;
//       const result = await taskcollection.insertOne(data);
//       res.send(result);
//     });



// // app.delete('/user/:id', async (req, res) => {
// //   try {
// //       const id = req.params.id;
// //       const query = { _id: new ObjectId(id) }
// //       const result = await userCollection.deleteOne(query);
// //       res.send(result);
// //   } catch (error) {
// //       console.log("'error on app.delete('/user/:id'", error)
// //   }
// // })


    
//     //     // -----------------------JWT related API ----------------
//     app.post('/jwt', async (req, res) => {
//       const user = req.body;
//       const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//       res.send({ token });
//     });

// <<<<<<< HEAD
//     //     // MiddleWares
//     const verifyToken = (req, res, next) => {
//       console.log('Inside verify Token', req.headers.authorization);
//       if (!req.headers.authorization) {
//         return res.status(401).send({ message: 'Unauthorized access' });
//       }
//       const token = req.headers.authorization.split(' ')[1];
//       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//           return res.status(401).send({ message: 'Unauthorized access' });
//         }
//         req.decoded = decoded;
//         next();
//       })
//     };

//     //     // use verifyAdmin after verifyToken
//     const verifyAdmin = async (req, res, next) => {
//       const email = req.decoded.email;
//       const query = { email: email };
//       const user = await userCollection.findOne(query);
//       const isAdmin = user?.role === 'admin';
//       if (!isAdmin) {
//         return res.status(403).send({ message: 'forbidden Access' });
//       }

//       next();
//     }

//     //     // ---------------------------User related Apis----------------

//     app.get('/users', async (req, res) => {

//       let query = {};
//       if (req.query?.email) {
//         query = { email: req.query.email };
//       }
//       if (req.query?.name) {
//         query = { name: new RegExp(req.query.name, 'i') };
//       }

//       const result = await userCollection.find(query).toArray();
//       res.send(result);
//     });

//     app.get('/users/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await userCollection.findOne(query);
//       res.send(result);
//     });

//     app.get('/users/admin/:email', async (req, res) => {
//       const email = req.params.email;
//       if (!email === req?.decoded?.email) {
//         return res.status(403).send({ message: 'Forbidden Access' });
//       }

//       const query = { email: email };
//       const user = await userCollection.findOne(query);
//       let admin = false;
//       if (user) {
//         admin = user?.role === 'admin';
//       }
//       res.send({ admin });
//     });

//     app.post('/users', async (req, res) => {
//       const user = req.body;
//       // checking user exist or not
//       const query = { email: user.email };
//       const existingUser = await userCollection.findOne(query);
//       if (existingUser) {
//         return res.send({ message: 'user already exist', insertedId: null });
//       }
//       const result = await userCollection.insertOne(user);
//       res.send(result);
//     });
// =======
//     //  get api
//     // app.get('/courses', async (req, res) => {
//     //   try {
//     //     const result = await courseCollection.find().toArray()
//     //     res.send(result)
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // })

//      // find single id data for updating purpose
//     //  app.get("/courses/:id", async (req, res) => {
//     //  try {
//     //   const id = req.params.id;
//     //   const query = { _id: new ObjectId(id) };
//     //   const result = await  courseCollection.findOne(query);
//     //   res.send(result);
//     //  } catch (error) {
//     //   console.log(error);
//     //  }
//     // });
//     //------------------------  blog apis--------------------
// // //      // find single id data for updating purpose
// // //      app.get("/courses/:id", async (req, res) => {
// // //      try {
// // //       const id = req.params.id;
// // //       const query = { _id: new ObjectId(id) };
// // //       const result = await  courseCollection.findOne(query);
// // //       res.send(result);
// // //      } catch (error) {
// // //       console.log(error);
// // //      }
// // //     });
// // //     //------------------------  blog apis--------------------
//     // app.get('/blogs', async (req, res) => {
//     //   try {
//     //     const result = await blogCollection.find().toArray()
//     //     res.send(result)
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // })
// // //     app.get('/blogs', async (req, res) => {
// // //       try {
// // //         const result = await blogCollection.find().toArray()
// // //         res.send(result)
// // //       } catch (error) {
// // //         console.log(error);
// // //       }
// // //     })
// >>>>>>> eb8ebde495b8c6e484ebbfe30358891cc40c3d8a


//     //     // ---------------------------all courses apis ----------------

//     //     // popular
//     app.get('/popular', async (req, res) => {
//       const result = await courseCollection.find({ category: "popular" }).toArray()
//       res.send(result)
//     })

//     //     //  get api
//     app.get('/courses', async (req, res) => {
//       try {
//         const result = await courseCollection.find().toArray()
//         res.send(result)
//       } catch (error) {
//         console.log(error);
//       }
//     })

//     //      // find single id data for updating purpose
//     app.get("/courses/:id", async (req, res) => {
//       try {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) };
//         const result = await courseCollection.findOne(query);
//         res.send(result);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     //     //------------------------  blog apis--------------------
//     app.get('/blogs', async (req, res) => {
//       try {
//         const result = await blogCollection.find().toArray()
//         res.send(result)
//       } catch (error) {
//         console.log(error);
//       }
//     })


//     //     //------------------------  review apis--------------------
//     app.get("/reviews", async (req, res) => {
//       try {
//         const result = await reviewCollection.find().toArray()
//         res.send(result)
//       } catch (error) {
//         console.log(error);
//       }
//     })

//     //       // stripe and payment things ---------------------------

//     app.post("/create-payment-intent", async (req, res) => {
//       const { price } = req.body;
//       const amount = parseInt(price * 100);
//       if (!price || amount < 1) return;
//       const { client_secret } = await stripe.paymentIntents.create({
//         amount: amount,
//         currency: "usd",
//         payment_method_types: ["card"],
//       });
//       res.send({ clientSecret: client_secret });
//     });

//     //       // set item info in a booking collection
//     app.post("/bookings", async (req, res) => {
//       const booking = req.body;
//       const result = await bookingCollection.insertOne(booking);
//       res.send(result);
//     });

//     app.get("/bookings", async (req, res) => {
//       const stEmail = req.query.stEmail;
//       console.log(stEmail);
//       const result = await bookingCollection
//         .find({ stEmail: stEmail })
//         .toArray();
//       res.send(result);
//     });


// // //     //------------------------  review apis--------------------
// // //     app.get("/reviews", async (req, res) => {
// // //       try {
// // //         const result = await reviewCollection.find().toArray()
// // //         res.send(result)
// // //       } catch (error) {
// // //         console.log(error);
// // //       }
// // //     })

// // //       // stripe and payment things ---------------------------

// // //       app.post("/create-payment-intent", async (req, res) => {
// // //         const { price } = req.body;
// // //         const amount = parseInt(price * 100);
// // //         if (!price || amount < 1) return;
// // //         const { client_secret } = await stripe.paymentIntents.create({
// // //           amount: amount,
// // //           currency: "usd",
// // //           payment_method_types: ["card"],
// // //         });
// // //         res.send({ clientSecret: client_secret });
// // //       });
  
// // //       // set item info in a booking collection
// // //       app.post("/bookings",  async (req, res) => {
// // //         const booking = req.body;
// // //         const result = await bookingCollection.insertOne(booking);
// // //         res.send(result);
// // //       });
  
// // //       app.get("/bookings", async (req, res) => {
// // //         const stEmail = req.query.stEmail;
// // //         console.log(stEmail);
// // //         const result = await bookingCollection
// // //           .find({ stEmail: stEmail })
// // //           .toArray();
// // //         res.send(result);
// // //       });

//   //   app.post('/blogs', async (req, res) => {
//   //     try {
//   //         const blog = req.body;
//   //         const result = await blogCollection.insertOne(blog);
//   //         res.send(result);
//   //     } catch (error) {
//   //         console.log("error on app.post('/products',", error)
//   //     }
//   // })

//       // stripe and payment things ---------------------------

//       // app.post("/create-payment-intent", async (req, res) => {
//       //   const { price } = req.body;
//       //   const amount = parseInt(price * 100);
//       //   if (!price || amount < 1) return;
//       //   const { client_secret } = await stripe.paymentIntents.create({
//       //     amount: amount,
//       //     currency: "usd",
//       //     payment_method_types: ["card"],
//       //   });
//       //   res.send({ clientSecret: client_secret });
//       // });
  
//       // set item info in a booking collection
//       // app.post("/bookings",  async (req, res) => {
//       //   const booking = req.body;
//       //   const result = await bookingCollection.insertOne(booking);
//       //   res.send(result);
//       // });
  
//       // app.get("/bookings", async (req, res) => {
//       //   const stEmail = req.query.stEmail;
//       //   console.log(stEmail);
//       //   const result = await bookingCollection
//       //     .find({ stEmail: stEmail })
//       //     .toArray();
//       //   res.send(result);
//       // });

// // //     //------------------------  review apis--------------------
// // //     app.get("/reviews", async (req, res) => {
// // //       try {
// // //         const result = await reviewCollection.find().toArray()
// // //         res.send(result)
// // //       } catch (error) {
// // //         console.log(error);
// // //       }
// // //     })

// // //       // stripe and payment things ---------------------------

// // //       app.post("/create-payment-intent", async (req, res) => {
// // //         const { price } = req.body;
// // //         const amount = parseInt(price * 100);
// // //         if (!price || amount < 1) return;
// // //         const { client_secret } = await stripe.paymentIntents.create({
// // //           amount: amount,
// // //           currency: "usd",
// // //           payment_method_types: ["card"],
// // //         });
// // //         res.send({ clientSecret: client_secret });
// // //       });
  
// // //       // set item info in a booking collection
// // //       app.post("/bookings",  async (req, res) => {
// // //         const booking = req.body;
// // //         const result = await bookingCollection.insertOne(booking);
// // //         res.send(result);
// // //       });
  
// // //       app.get("/bookings", async (req, res) => {
// // //         const stEmail = req.query.stEmail;
// // //         console.log(stEmail);
// // //         const result = await bookingCollection
// // //           .find({ stEmail: stEmail })
// // //           .toArray();
// // //         res.send(result);
// // //       });

//     // stripe and payment things ---------------------------

//     // app.post("/create-payment-intent", async (req, res) => {
//     //   const { price } = req.body;
//     //   const amount = parseInt(price * 100);
//     //   if (!price || amount < 1) return;
//     //   const { client_secret } = await stripe.paymentIntents.create({
//     //     amount: amount,
//     //     currency: "usd",
//     //     payment_method_types: ["card"],
//     //   });
//     //   res.send({ clientSecret: client_secret });
//     // });

//     // set item info in a booking collection
//     // app.post("/bookings", async (req, res) => {
//     //   const booking = req.body;
//     //   const result = await bookingCollection.insertOne(booking);
//     //   res.send(result);
//     // });

//     // app.get("/bookings", async (req, res) => {
//     //   const stEmail = req.query.stEmail;
//     //   console.log(stEmail);
//     //   const result = await bookingCollection
//     //     .find({ stEmail: stEmail })
//     //     .toArray();
//     //   res.send(result);
//     // });
// // //     // Send a ping to confirm a successful connection
// // //     await client.db("admin").command({ ping: 1 });
// // //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// // //   } finally {
// // //     // Ensures that the client will close when you finish/error
// // //     // await client.close();
// // //   }
// // // }
// // // run().catch(console.dir);
// // //     // Send a ping to confirm a successful connection
// // //     await client.db("admin").command({ ping: 1 });
// // //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// // //   } finally {
// // //     // Ensures that the client will close when you finish/error
// // //     // await client.close();
// // //   }
// // // }
// // // run().catch(console.dir);


// // // app.get('/', (req, res) => {
// // //   res.send('our server is running');
// // // })

// // // app.listen(port, () => {
// // //   console.log(`server is running on port:${port}`)
// // // })

// // // app.get('/', (req, res) => {
// // //   res.send('our server is running');
// // // })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// app.get('/', (req, res) => {
//   res.send('our server is running');
// })

// app.listen(port, () => {
//   console.log(`server is running on port:${port}`)
// })

// <<<<<<< HEAD
// app.get("/notices", async (req, res) => {
//   try {
//     const result = await noticesCollection.find().toArray()
//     res.send(result)
//   } catch (error) {
//     console.log(error);
//   }
// })
// =======
// // // app.listen(port, () => {
// // //   console.log(`server is running on port:${port}`)
// // // })

// // app.get("/notices", async (req, res) => {
// //   try {
// //     const result = await noticesCollection.find().toArray()
// //     res.send(result)
// //   } catch (error) {
// //     console.log(error);
// //   }
// // })
// // })
// // })
// >>>>>>> eb8ebde495b8c6e484ebbfe30358891cc40c3d8a
