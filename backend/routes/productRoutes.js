import express from "express";
import {
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
  getRelatedProducts,
  addProduct,
  removeProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/allproducts", getAllProducts);
router.get("/newcollections", getNewCollections);
router.get("/popularinwomen", getPopularInWomen);
router.post("/relatedproducts", getRelatedProducts);
router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);

export default router;
