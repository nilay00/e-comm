import { comparePassword, toBeHashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, phone, address, password } = req.body;
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({ success: true, message: "user All Ready Exist" });
    }
    const hashedPassword = await toBeHashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(200).send({
      success: true,
      message: "user registration successfull",
      user,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      message: "Error While Registration",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "Email and Password are Required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SCRETE, {
      expiresIn: "3d",
    });
    res.status(200).send({
      success: true,
      message: "Loggin Successfull",
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.log("error while login: ", error);
    res.status(500).send({
      success: false,
      message: "error while login",
      error,
    });
  }
};
export const testController = (req, res) => {
  res.send("testing a controller");
};
