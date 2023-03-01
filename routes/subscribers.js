// call express because the whole application uses express
const express = require("express");

//get router from express
const router = express.Router();

// Getting all
router.get("/", (req, res) => {
  res.send("Hello World");
});

// Getting One
router.get("/:id", (req, res) => {});

// Creating one
router.post("/", (req, res) => {});

// Updating one
// use patch instead of put because we only want to update what the user patches us like only want to update name. if using put, it will update all at one except for the information that get passed
router.patch("/:id", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
