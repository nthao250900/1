const express = require("express");
const router = express.Router();
const {
  SelectProductWithTop,
  SelectRandomProduct,
  SearchKeywordProduct,
} = require("../src/controllers/product.controller");
const {
  SelectTermsOfServiceLastRow,
} = require("../src/controllers/TermsOfService.controller");
const {
  SelectReturnPolicyLastRow,
} = require("../src/controllers/returnPolicy.controller");

router.post("/select-product", SelectProductWithTop);
router.post("/select-product-random", SelectRandomProduct);
router.get("/select-terms-of-service", SelectTermsOfServiceLastRow);
router.get("/select-return-policy", SelectReturnPolicyLastRow);
router.post("/search-product", SearchKeywordProduct);

module.exports = router;
