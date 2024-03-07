import express from "express";
import protectRoute from "../middleware/middleware.js";
import { getMessage, sendMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

export default router;
