const express = require("express");
require("dotenv").config;
const app = express();
const cors = require("cors");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});

app.use(express.json());
