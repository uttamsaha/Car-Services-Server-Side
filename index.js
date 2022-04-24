const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running Car services server");
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
