import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import { fetchuser } from "../middleware/fetchuser.js";

const router = express.Router();

router.post("/addtocart", fetchuser, addToCart);
router.post("/removefromcart", fetchuser, removeFromCart);
router.post("/getcart", fetchuser, getCart);

export default router;
