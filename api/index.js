const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true, ts: Date.now() }));

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Marco" },
    { id: 2, name: "Demo User" },
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on ${port}`));
