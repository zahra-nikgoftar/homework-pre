const mongoose = require("mongoose");

const ConnectDB = (uri) => {
  try {
    return mongoose.connect(uri);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = ConnectDB;