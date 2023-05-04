const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://faizan1166:faizan1166@cluster0.ubkwsgo.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      console.log("connection error", err);
    } else {
      console.log("Databse connection established");
    }
  }
);
