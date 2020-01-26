const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

let fruit = [];

router.get("/", (req, res) => {
  
});

router.post("/", (req, res) => {
    fruit.push(req.body);
    res.sendStatus(200);
})

module.exports = router;
