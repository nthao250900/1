const express = require("express");
const router = express.Router();
const authRoute = require("./Auth.route");
const adminRoute = require("./Admin.route");
const uploadRoute = require("./UploadImage.route");
const clientRoute = require("./Client.route");

router.use("/auth", authRoute);
router.use("/admin", adminRoute);
router.use("/client", clientRoute);
router.use("/upload", uploadRoute);

module.exports = {
  routes: router,
};
