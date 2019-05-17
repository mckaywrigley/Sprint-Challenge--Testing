const express = require("express");

const app = express();
app.use(express.json());

const gameRoutes = require("./routes/games");

app.use("/api/games", gameRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});

module.exports = app;
