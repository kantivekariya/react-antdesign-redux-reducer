import blacklist from "express-jwt-blacklist";
import { userModel } from "./auth.model";
import httpStatus from "../../utils/httpStatus";

const userController = {};

// Create User
userController.register = async (req, res) => {
  let newUser = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  let { password, __v, ...user } = newUser.toObject();
  return res.status(httpStatus.CREATED).json({ data: { user } });
};

// Login user
userController.login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
        errors: [
          {
            location: "body",
            param: "email",
            value: email,
            msg: "User not found"
          }
        ]
      });
    }

    let isMatch = await user.matchPasswords(req.body.password);
    console.log("isMatch", isMatch);
    if (!isMatch) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
        errors: [
          {
            location: "body",
            param: "password",
            value: "",
            msg: "Incorrect Password"
          }
        ]
      });
    }
    return res.json({
      token: user.generateJWT(false)
    });
  } catch (error) {
    throw error;
  }
};

// Get All Users
userController.findAll = async (req, res) => {
  try {
    let users = await userModel.find();
    return res.json(users);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// Get User By ID
userController.findOne = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.userId);
    if (!user) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// Update User By ID
userController.update = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.userId);
    if (!user) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "User not found" });
    }
    Object.assign(user, req.body);
    await user.save();
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Delete User By ID
userController.delete = async (req, res) => {
  try {
    let user = await userModel.findByIdAndRemove(req.params.userId);
    if (!user) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

userController.me = async (req, res) => {
  return res.json({
    email: req.user.email,
    name: req.user.name
  });
};

userController.logout = async (req, res) => {
  blacklist.purge(req.user);
  return res.json({
    toekn: req.headers.authorization
  });
};

export default userController;
