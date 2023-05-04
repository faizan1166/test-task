const userModel = require("../model/user");

module.exports = {
  saveuser: (req, res) => {
    try {
      userModel(req.body).save((err1, result) => {
        if (err1) {
          return res
            .status(500)
            .send({
              responseMessage: "Internal server error",
              responseCode: 501,
              error: err1,
            });
        } else {
          return res
            .status(200)
            .send({
              responseMessage: "User saved successfully to our Database",
              responseCode: 200,
              res: result,
            });
        }
      });
    } catch (error) {
      return res
        .status(501)
        .send({
          responseMessage: "Something went wrong",
          responseCode: 501,
          error: error,
        });
    }
  },

  getuser: (req, res) => {
    try {
      userModel.findOne({ email: req.body.email }, (err, res1) => {
        if (err) {
          return res
            .status(500)
            .send({
              responseMessage: "Internal server error",
              responseCode: 501,
              error: err,
            });
        } else if (res1) {
          return res
            .status(200)
            .send({
              responseMessage: "Details",
              responseCode: 409,
              res1: res1,
            });
        }
      });
    } catch (error) {
      return res
        .status(501)
        .send({
          responseMessage: "Something went wrong",
          responseCode: 501,
          error: error,
        });
    }
  },

  getallusers: (req, res) => {
    try {
      userModel.find((err, result) => {
        if (err) {
          return res
            .status(500)
            .send({
              responseMessage: "Internal server error",
              responseCode: 501,
              error: err,
            });
        } else if (result) {
          return res
            .status(200)
            .send({
              responseMessage: "All Users Deatils: ",
              responseCode: 200,
              result: result,
            });
        }
      });
    } catch (error) {
      return res
        .status(501)
        .send({
          responseMessage: "Something went wrong",
          responseCode: 501,
          error: error,
        });
    }
  },
};
