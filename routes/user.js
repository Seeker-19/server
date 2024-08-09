import express from "express";
import { register, login, logout, getUserbyId } from "../controllers/user.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/getuser", isAuthenticated, getUserbyId);

export default router;
