import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  newTrial,
  getAllTrials,
  updateTrial,
  deleteTrial,
} from "../controllers/clinic.js";

const router = express.Router();

router.post("/newtrial", isAuthenticated, newTrial);

router.get("/getTrials", isAuthenticated, getAllTrials);

router
  .route("/trial/:id")

  .put(isAuthenticated, updateTrial);

router.delete("/deleteTrial/:id", isAuthenticated, deleteTrial);

export default router;
