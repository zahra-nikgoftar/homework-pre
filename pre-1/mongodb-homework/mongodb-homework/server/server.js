const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./db/connectDB");


dotenv.config();
const app = express();
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/member", require("./routers/users.routes"));

const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await ConnectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server run on port", PORT);
    });
  } catch (error) {
    console.error(error);
  }
};

start();