import { RequestHandler } from "express";

import User from '../db/models/user';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body });

    return res.status(201)
      .json({ message: "User created successfully", data: User });
  } catch (error) {
    return res.status(500)
      .json({ message: "User could not be created" });
  }
}

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);

  if (!user)
    return res.status(404)
      .json({ message: "User not found" });

  return res.status(200)
    .json({ message: "User fetched successfully", data: user });
}

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);

  if (!user)
    return res.status(404)
      .json({ message: "User not found" });

  await User.update({ ...req.body }, { where: { id } });

  return res.status(200)
    .json({ message: "User updated successfully", data: user });
}

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);

  if (!user)
    return res.status(404)
      .json({ message: "User not found" });

  await User.destroy({ where: { id } });

  return res.status(200)
    .json({ message: "User deleted successfully", data: user });
}
