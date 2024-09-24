require("dotenv").config();
const express = require("express");
const sequelize = require("./db/connection");

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use("/users", require("./routes/user.routes"));
app.use("/posts", require("./routes/post.routes"));

sequelize
  .sync({ alter: true })
  .then(() => console.log(`tables created successfully 🥂`))
  .catch((err) => console.log(`error: ${err}`));

app.listen(port, () => console.log(`server running on port ${port} 🥂`));