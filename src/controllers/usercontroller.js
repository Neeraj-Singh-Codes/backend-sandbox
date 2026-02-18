import mongoose from "mongoose";
import userModel from "../config/schema.js";
import bcrypt from "bcryptjs";

export async function getUsers(req, res) {
  try {
    const result = await userModel.find();
    if (!result) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(result);
  } catch (ex) {
    return res.json(ex.message);
  }
}

export async function createUser(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);
    const user = new userModel({ username, password: hashedpassword });
    await user.save();
    res.status(201).json(user);
  } catch (ex) {
    return res.json(ex.message);
  }
}

export async function updateUser(req, res) {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(401).json({ message: "Wrong ID provided" });
    }
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "No user found with this ID" });
    }
    const { username, password } = req.body;
    if (req.body.username) {
      user.username = username;
    }
    if (req.body.password) {
      const hashedpassword = await bcrypt.hash(password, 10);
      user.password = hashedpassword;
    }

    await user.save();
    res.status(201).json(user);
  } catch (ex) {
    return res.json(ex.message);
  }
}

export async function deleteUser(req, res) {
  try {
    const result = await userModel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "User Doesnt Exist" });
    }
    res.status(200).json({ result: "User deleted succssfuly" });
  } catch (ex) {
    return res.json({ message: "Error Occured While deleting user" });
  }
}
