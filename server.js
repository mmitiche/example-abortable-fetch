import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;

app.post("/sse", function (req, res) {
  console.log("new request");
  res.send("new message1");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
