const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// making salt for bcrypt
const salt = bcrypt.genSaltSync(10);
// connecting with mongodb
const url =
  "mongodb+srv://demo07:2468Thisisdemo@cluster0.fpsca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "webdevProject";

client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);
// name of the collection
const collection = db.collection("documents");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// getting data from signup page
app.post("/api/signup", (req, res) => {
  // console.log(req.body);

  if (req.body) {
    const hashPassword = bcrypt.hashSync(req.body?.password, salt);

  if (!req.body) {
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const userSignupData = {
      role: req.body.role,
      name: req.body.name,
      userName: req.body.userName,
      contactNumber: req.body.contactNumber,
      userEmail: req.body.userEmail,
      password: hashPassword,
    };
    collection.insertOne(userSignupData);
  }
});

// getting data from login page
app.post("/api/login", async (req, res) => {
  // console.log(req.body);
  if (req.body) {
    const userLoginData = { ...req.body };
    const userGetData = await collection.findOne({
      userName: userLoginData.userName,
    });
    const userGetDataPass = userGetData
      ? bcrypt.compareSync(userLoginData.password, userGetData?.password)
      : false;
    if (!userGetDataPass) {
      res.send({ message: "Wrong user name password!or Please try again" });
    } else {
      res.send({ message: "done" });
    }
    // console.log(userGetData);
  } else {
    res.status(404).send({ error: "something blew up" });
  }
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:5000");
});
