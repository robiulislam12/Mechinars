//External Lib import
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

//Enable dotenv
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());

//Mongo Fb Connect
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nbyjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("services");
    const servicesCollection = database.collection("services");

    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum6",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await servicesCollection.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

//check for all things
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

//Listening the app
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
