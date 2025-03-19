import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsersByCity,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/search", searchUsersByCity);

export default router;
