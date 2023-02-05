import { RequestHandler } from "express";

import User from '../db/models/user';

/**
 * Get all users from the database
 *
 * @param req Request object
 * @param res Response object
 * @param next Next function
 * @returns Response object
 */
export const getAllUsers: RequestHandler = async (req, res, next) => {
  const users: User[] = await User.findAll();
  
  return res.status(200)
    .json({ message: "Users successfully fetched", data: users });
}
