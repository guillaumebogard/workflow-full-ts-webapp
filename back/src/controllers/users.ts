import { RequestHandler } from "express";

import User from '../db/models/user';

export const getAllUsers: RequestHandler = async (req, res, next) => {
  const users: User[] = await User.findAll();
  
  return res.status(200)
    .json({ message: "Users fetched successfully", data: users });
}
