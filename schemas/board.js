//mongodb에 table및 column을 만드는 역할
//name, password, title, date, memo clolmn을 생성하고
// boardid에 역할은 내용을 추가하거나 선택할 때 또는 상세페이지로 이동할 때
// boardid를 가져와서 사용할 것임으로
// required: true, unique: true로 진행해서 중복되지 않게 함

const mongoose = require("mongoose");

const { Schema } = mongoose;
const boardSchema = new Schema({
  boardId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },

  date: {
    type: Number,
  },

  memo: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Boards", boardSchema);
