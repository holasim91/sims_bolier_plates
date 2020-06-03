const express = require("express");
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const config = require("./config/key");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 갖고오게 해줌
app.use(bodyParser.json()); //application/json 이렇게 된 데이터를 분석해서 갖고오게 해줌

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connect Success"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("Hello World!! 크크루삥뽕");
});

app.post("/register", (req, res) => {
  //회원가입할 때 필요한 정보를 클라이언트에서 받아오면 얘네를 DB로 넣어줌
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ Success: false, err });
    return res.status(200).json({
      Success: true,
    });
  }); //정보들을 Usermodel에 저장
});

app.listen(port, () => console.log(`App is running at Port ${port}`));
