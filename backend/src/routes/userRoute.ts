import express from "express";
import userController from "../controllers/userController";

export const router = express.Router();


router.post("/create-user" , userController.createUser);
