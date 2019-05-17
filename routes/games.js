const express = require("express");
const router = express.Router();

const games = [
  {
    title: "Pacman", // required
    genre: "Arcade", // required
    releaseYear: 1980 // not required
  }
];

router.post("/", (req, res) => {
  const { title, genre } = req.body;
  if (!title || !genre) {
    return res.status(422).json({ error: "Please provide title and genre." });
  }
  games.push(req.body);
  return res.status(201).json(req.body);
});

router.get("/", (req, res) => {
  return res.status(200).json(games);
});

module.exports = router;
