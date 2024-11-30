import { Request, Response } from "express";
import { addUser, userExist } from "../models/userModel";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { supabaseId } = req.body;

      const userExists = await userExist(supabaseId);

      if (userExists) {
        return res.status(200).json({
          message: "User Already Exist!",
        });
      }

      const user = await addUser(req.body);

      return res.status(200).json({
        message: "User created successfully!",
        success: true,
        user,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error creating user",
        success: false,
        err,
      });
    }
  }

  
}

export default new UserController();
