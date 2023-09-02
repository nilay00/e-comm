import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const registerSignIn = (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SCRETE
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log("error: ", error);
  }
};
export const isAdmin = (req, res, next) => {
  try {
    const user = userModel.findOne({ _id: req.user._id });
    const isAdmin = (user.role = 1);
    if (!isAdmin) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
