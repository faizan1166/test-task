const express = require("express");
const app = express();
require("dotenv").config();
require("./db/dbconnection");
const userRouter = require("./routes/userRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", userRouter);

app.listen(4000, () => {
  console.log(`server is running on 4000`);
});
