const express = require("express");
const app = express();
const port = 3000;

const connect = require("./schemas");
connect();

const boardRouter = require("./routers/board");

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use("/api", [boardRouter]);

// ejs setting
app.set("views", __dirname + "/views");
//__dirname <- 현재 실행하는 파일의 절대경로
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌음");
});

// const express = require("express");
// const connect = require("./schemas");
// const app = express();
// const port = 3000;

// connect();

// const goodsRouter = require("./routes/goods");
// const cartsRouer = require("./routes/carts");

// const requestMiddleware = (req, res, next) => {
//   console.log("Request URL:", req.originalUrl, " - ", new Date());
//   next();
// };

// app.use(express.json()); // 미들웨어가 생김, body로 들어오는 json형태의 데이터를 파싱해줌
// app.use(requestMiddleware);

// app.use("/api", [goodsRouter, cartsRouer]); // 경로가 겹치면 앞에있는게 먼저 실행됨

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(port, "포트로 서버가 켜졌음");
// });
