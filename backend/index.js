const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const createError = require("http-errors");

const config = require("./config/config");
const cors = require("cors");
const router = require("./routes");
const corsOptions = require("./config/corsOption");

require("./helpers/generate_keys");

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router.routes);
app.use("/image", express.static("upload_images"));
app.use("/json-data", express.static("json"));
app.use(async (req, res, next) => {
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = config.port || 8080;
app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
