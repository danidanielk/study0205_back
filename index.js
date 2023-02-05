//패키지 시작점.

//익스프레스 묘둘 가저온다.
const express = require("express");
//새로운 앱을 만든다.
const app = express();
//백 서버 포트설정.
const port = 5000;
//몽고디비 연결....
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://danieldb:1@dani.cxahzsq.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello Worlddssddsd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
