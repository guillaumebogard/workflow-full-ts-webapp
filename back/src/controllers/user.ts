import { RequestHandler } from "express";

import User from '../db/models/user';

export const createUser: RequestHandler = async (req, res, next) => {
  const createUserBody: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
  } = req.body;

  if (!createUserBody.firstName || !createUserBody.lastName || !createUserBody.email) {
    return res.status(400)
      .json({ message: "All required fields are not present in body of the request" });
  }

  const userWithEmail: User | null = await User.findOne({ where: { email: createUserBody.email } });

  if (userWithEmail) {
    return res.status(400)
      .json({ message: "User with this email already exists" });
  }

  try {
    const user = await User.create({ ...createUserBody });

    return res.status(201)
      .json({
        message: "User successfully created",
        data: user
      });
  } catch (error) {
    return res.status(500)
      .json({
        message: "User could not be created"
      });
  }
}

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400)
      .json({ message: "'id' field is required in the params of the request" });
  }

  try {
    const user: User | null = await User.findByPk(id);

    if (!user) {
      return res.status(404)
        .json({ message: "User not found" });
    }

    return res.status(200)
      .json({ message: "User successfully fetched", data: user });
  } catch (error) {
    return res.status(500)
      .json({ message: "User could not be fetched" });
  }
}

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400)
      .json({ message: "'id' field is required in the params of the request" });
  }

  const updateUserBody: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  } = req.body;

  if (!updateUserBody.firstName && !updateUserBody.middleName && !updateUserBody.lastName && !updateUserBody.email && !updateUserBody.password) {
    return res.status(400)
      .json({ message: "At least one field is required in the body of the request" });
  }

  const user: User | null = await User.findByPk(id);

  if (!user) {
    return res.status(404)
      .json({ message: "User not found" });
  }

  if (updateUserBody.email && updateUserBody.email !== user.email) {
    const userWithEmail: User | null = await User.findOne({ where: { email: updateUserBody.email } });

    if (userWithEmail) {
      return res.status(400)
        .json({ message: "User with this email already exists" });
    }
  }

  try {
    await User.update({ ...updateUserBody }, { where: { id } });

    const updatedUser: User | null = await User.findByPk(id);

    return res.status(200)
      .json({ message: "User successfully updated", data: updatedUser });
  } catch (error) {
    return res.status(500)
      .json({ message: "User could not be updated" });
  }
}

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400)
      .json({ message: "'id' field is required in params of the request" });
  }

  const user: User | null = await User.findByPk(id);

  if (!user) {
    return res.status(404)
      .json({ message: "User not found" });
  }

  try {
    await User.destroy({ where: { id } });

    return res.status(200)
      .json({ message: "User successfully deleted", data: user });
  } catch (error) {
    return res.status(500)
      .json({ message: "User could not be deleted" });
  }
}
