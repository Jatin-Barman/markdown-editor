const express = require("express");
const marked = require("marked");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).send({ error: "Markdown content is required" });
  }
  const html = marked.parse(markdown); // Use .parse() method
  res.send({ html });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
