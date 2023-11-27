const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    data: "",
    message: "Your Server Is Online",
  });
});

app.listen(port, () => {
  console.log(`Your server is running under the port ${port}`);
});


