//패키지 시작점.

//익스프레스 묘둘 가저온다.
const express = require("express");
//새로운 앱을 만든다.
const app = express();
//백 서버 포트설정.
const port = 5000;
//몽고DB 주소,pw 가 git에 올라가는것을 방지하기위해 따로 저장해서 사용
const db = require("./config/dev"); //배포쪽은 패스 .. dev 에서 바로 임포트
//몽고디비 연결....
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(db.mongoURI, { useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

//유저 모델 사용하기위해 임포트?
const { User } = require("./model/User");

//다운받은 바디파서 가져오기
// const bodyParser = require("body-parser"); // express 에서 이제 지원해준다 아래코드입력.
app.use(express.json());
//application/x-www-form-urlencoded 가져올수 있게해준다.
// app.use(bodyParser.urlencoded({ extended: true }));
//json으로 가져올 수 있게 해준다.
// app.use(bodyParser.json);
//

app.get("/", (req, res) => {
  res.send("하이헬러오오ㄴㅇsdfsdfsdfㄹ오오");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
