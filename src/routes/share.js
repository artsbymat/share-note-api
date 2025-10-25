import express from "express";
import {
  handleDelete,
  handleGet,
  handlePost,
} from "../controllers/shareController.js";
import { verifyPrivateKey } from "../middlewares/privateKeyMiddleware.js";

const router = express.Router();

router.post("/", handlePost);
router.get("/", verifyPrivateKey, handleGet);
router.get("/:id", verifyPrivateKey, handleGet);
router.delete("/:id", handleDelete);

export default router;
