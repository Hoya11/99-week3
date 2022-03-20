const express = require("express");
const connect = require("./schemas");
const app = express();
const port = 3000;

connect();


const goodsRouter = require("./routes/goods");

const requestMiddleware =(req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
}

app.use(express.json()); // 미들웨어가 생김, body로 들어오는 json형태의 데이터를 파싱해줌
app.use(requestMiddleware);

app.use("/api", [goodsRouter]);

app.get("/", (req, res) =>{
    res.send("Hello World")
});


app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌음")
});