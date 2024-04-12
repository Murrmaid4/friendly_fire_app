const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
// require('dotenv').config()
// process.env.URI

// this brings the modules into this page to be used

const uri =
  "mongodb+srv://pritchettb14:friendlyfire@cluster0.bzxi0yi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// this connects to our database in atlas

const app = express();
app.use(cors());
app.use(express.json());
//connects to express node module

// Default
app.get("/", (req, res) => {
  res.json("Hello to my app");
});
// for testing in the browser, if you do npm run start:backend  in controllers folder

// Sign up to the Database - tested and working!!!!!!!!!!!!
app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  //this is the variable that holds the mongo npm and database link<< this is typically the first step in every server request
  const email = req.body.email;
  const password = req.body.hashed_password;
  // variable that will hold the email and password entered
  const generatedUserId = uuidv4();
  // this variable will hold a unique id for users using uuid npm

  try {
    console.log("Received email:", email);
    console.log("Received password:", password);
    await client.connect();
    // this calls the variable that connects to the database
    const database = client.db("app-data");
    // grabs the app-data database
    const users = database.collection("users");
    // finds the user collection

    const existingUser = await users.findOne({ email });
    // queries the user collection to find the email that was entered in the req.body

    if (existingUser) {
      return res.status(409).send("User already exists. Please login");
    }

    const sanitizedEmail = email.toLowerCase();
    console.log(sanitizedEmail);
    console.log("hashing password");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Password hashed:", hashedPassword);

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

//find all users in the database - tested and is working
app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);
  // const userIds = JSON.parse(req.query.userIds)

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    // const pipeline =
    //     [
    //         {
    //             '$match': {
    //                 'user_id': {
    //                     '$in': userIds
    //                 }
    //             }
    //         }
    //     ]

    const foundUsers = await users.find().toArray();

    res.json(foundUsers);
  } finally {
    await client.close();
  }
});

// Get all the Gendered Users in the Database - tested and is working
app.get("/gendered-users/:gender", async (req, res) => {
  const client = new MongoClient(uri);
  const gender = req.params.gender;
  console.log(gender);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const foundUsers = await users.find({ gender_identity: gender }).toArray();
    res.json(foundUsers);
    console.log(foundUsers);
  } finally {
    await client.close();
  }
});

// Log in to the Database - tested and working
app.post("/login", async (req, res) => {
  const client = new MongoClient(uri);
  const email = req.body.email;
  const password = req.body.hashed_password;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const user = await users.findOne({ email });

    if (user) {
        const correctPassword = await bcrypt.compare(
          password,
          user.hashed_password
        );
  
        if (correctPassword) {
          const token = jwt.sign(user, email, {
            expiresIn: 60 * 24,
          });

          console.log("logged in!")
          return res.status(201).json({ token, userId: user.user_id });
          
        }
      }

    // If user not found or password incorrect
    res.status(400).json("Invalid Credentials");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  } finally {
    await client.close();
  }
});

// Get individual user - tested and working
app.get("/user/:userId", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const userId = req.params.userId;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const user = await users.findOne({ user_id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send(user);
  } finally {
    await client.close();
  }
});

// Update User with a match (for swiping)
app.put("/addmatch", async (req, res) => {
  const client = new MongoClient(uri);
  const { userId, matchedUserId } = req.body;

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const query = { user_id: userId };
    const updateDocument = {
      $push: { matches: { user_id: matchedUserId } },
    };
    const user = await users.updateOne(query, updateDocument);
    res.send(user);
  } finally {
    await client.close();
  }
});

// Update a User in the Database - tested and is working (registration route)
app.put("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const formData = req.body;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const filter = { user_id: userId };

    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        dob_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        show_gender: formData.show_gender,
        gender_identity: formData.gender_identity,
        gender_interest: formData.gender_interest,
        url: formData.url,
        about: formData.about,
        matches: formData.matches,
      },
    };
    const result = await users.updateOne(filter, updateDocument);
    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "User not found or no changes applied" });
    }

    res.json({ message: "User information updated successfully" });
  } finally {
    await client.close();
  }
});

// Get Messages by from_userId and to_userId
app.get("/messages", async (req, res) => {
  const { userId, correspondingUserId } = req.query;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("app-data");
    const messages = database.collection("messages");

    const query = {
      from_userId: userId,
      to_userId: correspondingUserId,
    };
    const foundMessages = await messages.find(query).toArray();
    res.send(foundMessages);
  } finally {
    await client.close();
  }
});

// Add a Message to our Database
app.post("/message", async (req, res) => {
  const client = new MongoClient(uri);
  const message = req.body.message;

  try {
    await client.connect();
    const database = client.db("app-data");
    const messages = database.collection("messages");

    const insertedMessage = await messages.insertOne(message);
    res.send(insertedMessage);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log("server running on PORT " + PORT));
