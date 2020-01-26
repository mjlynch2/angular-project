const express = require("express");
const router = express.Router();

let fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "grapefruit" },
  { id: 3, name: "orange" },
  { id: 4, name: "watermelon" },
  { id: 5, name: "apple" },
  { id: 6, name: "pomegranate" },
  { id: 7, name: "pear" },
  { id: 8, name: "peach" },
  { id: 9, name: "raspberry" },
  { id: 10, name: "strawberry" },
  { id: 11, name: "blackberry" },
  { id: 12, name: "cherry" },
  { id: 13, name: "grape" }
];

router.get("/", (req, res) => {
    res.send(fruits);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const fruitToSend = fruits.find(fruit => fruit.id === id);
  console.log(id, fruitToSend);
  res.send(fruitToSend);
})

module.exports = router;
