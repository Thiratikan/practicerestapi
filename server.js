// type npm run devStart

//load all the environment variables from.env
require("dotenv").config();

// pul express librarian
const express = require("express");
// run express function
const app = express();
// create mongoose to connect to mongoose database
const mongoose = require("mongoose");

// connect to the database
mongoose.connect(process.env.Database_url, { useNewUrlParser: true });

const db = mongoose.connection;
// allows to see if there is a problem when trying to connect to the database
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//create to except JSON
app.use(express.json());

// set up Router
const subscribersRouter = require("./routes/subscribers");
// to tell to use the route to localhost:3000/subscribers/...
app.use("/subscribers", subscribersRouter);

// tell port we want to listen on, and run when server gets started
app.listen(3000, () => console.log("Server has started"));
