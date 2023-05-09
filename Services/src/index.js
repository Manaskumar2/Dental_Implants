const dotenv = require("dotenv");
const express = require("express");
const route = require("./routes/route");
const admin = require("./routes/adminRoute")
const app = express();
const cors = require('cors')


app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);


const multer = require("multer");

app.use(express.json());
const upload = multer();
app.use(upload.any());

dotenv.config({ path: "./config.env" });
let PORT = process.env.PORT;



app.use("/api", route);
app.use("/api/admin", admin);

app.use((req, res, next) => {
  const error = new Error("Path not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

app.listen(process.env.PORT, function () {
  console.log(`Express app running on ${PORT}`);
});