const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://admin:admin@mongodb-zcsg4.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log("MongoDB Connect Success"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});
app.listen(port, () => console.log(`App is running at Port ${port}`));
