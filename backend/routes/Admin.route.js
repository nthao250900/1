const express = require("express");
const router = express.Router();
const { verifyAccessToken } = require("../helpers/jwt_helper");
const { SelectAccount } = require("../src/controllers/account");
const {
  InsertProduct,
  SelectProduct,
} = require("../src/controllers/product.controller");
const {
  InsertTermsOfService,
} = require("../src/controllers/TermsOfService.controller");
const {
  InsertReturnPolicy,
} = require("../src/controllers/returnPolicy.controller");

router.post("/select-account", verifyAccessToken, SelectAccount);
router.post("/insert-product", verifyAccessToken, InsertProduct);
router.post("/select-product", verifyAccessToken, SelectProduct);
router.post(
  "/insert-terms-of-service",
  verifyAccessToken,
  InsertTermsOfService
);
router.post("/insert-return-policy", verifyAccessToken, InsertReturnPolicy);

module.exports = router;
