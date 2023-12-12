const mongoose = require("mongoose");
const app = require("../src/app/app.js");
require("dotenv").config();
const port = process.env.PORT || 5000;

const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASS}@cluster1.zscbcon.mongodb.net/chat-app?retryWrites=true&w=majority`
    );
    app.get("/", (req, res) => {
      res.send("Payra Has been sent");
    });

    app.listen(port, () => {
      console.log(`Your server is running under the port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main().catch((err) => console.log(err));
