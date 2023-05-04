const { Types, Schema, model } = require("mongoose");

const user = new Schema({
  firstName: {
    type: String,
  },
  DOB: {
    type: String,
  },
  sex: {
    type: String,
  },
  mobile: {
    type: String,
  },
  govIdType: {
    type: String,
  },
  aadharNumber: {
    type: String,
  },
  pan: {
    type: String,
  },
  gradianType: {
    type: String,
  },
  gradianName: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  emergencyNumber: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
  occupation: {
    type: String,
  },
  religion: {
    type: String,
  },
  martialStatus: {
    type: String,
  },
  blood: {
    type: String,
  },
  nationality: {
    type: String,
  },
});

module.exports = model("user", user);
