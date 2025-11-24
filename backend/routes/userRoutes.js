

import express from "express";
import { registerUser, loginUser, getMe, updateUserProfile, getAllUsers, deleteUser } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.put("/updateUser/:id", protect, updateUserProfile);
router.get("/allUsers", protect, getAllUsers);
router.delete("/deleteUser/:id", protect, deleteUser);

export default router;


