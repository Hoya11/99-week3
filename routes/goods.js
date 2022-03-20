const express = require("express");
const Goods = require("../schemas/goods")
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("this is root page");
});



router.get("/goods", async (req,res) =>{
  const goods = await Goods.find();

  res.json({ goods });
});

router.get("/goods/:goodsId", async (req, res) =>{
    const { goodsId } = req.params;

    const [detail] = await Goods.find({ goodsId: Number(goodsId)});
    // const [detail] = goods.filter((item) => item.goodsId === Number(goodsId));
    // 위 코드로 바꾼거

    res.json({
        detail,
    });
});

router.post("/goods", async (req, res) =>{
  // const goodsId = req.body.goodsId;  
  // const name = req.body.goodsId;  밑에 코드랑 동일함
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId })
  
  if(goods.length){
    return res.status(400).json({ success: false, errorMassage: "이미 있는 데이터입니다."});
  }

  const createGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({goods: createGoods});
});

module.exports = router;