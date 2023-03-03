//using mongoose to interact with the database in a easy way
const mongoose = require("mongoose");

// creating a schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// Date.now = if we don't pass the subscriberDate, the default date will be current date

//model takes two properties subscriber, and subscriberSchema. Schema co responds with subscriber
//We need the model function because when we import it to the different fil, the model will allow to interact with the database by using the schema
module.exports = mongoose.model("Subscriber", subscriberSchema);
