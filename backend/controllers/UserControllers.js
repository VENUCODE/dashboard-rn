const CreateError = require("../utils/CreateError");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.JWT_SECRET;
const SignUpRoute = async (req, res, next) => {
  try {
    const { name, email, password, usertype = "admin" } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return next(new CreateError("User account already exists", 400));
    }
    // const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password,
      usertype,
    });
    //assigning the jwt token to the new user
    const token = jwt.sign({ _id: newUser._id }, SECRET_KEY, {
      expiresIn: "7d",
    });
    console.log({ signUp: user });

    res.status(201).json({
      status: "success",
      message: "User Registered successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};
const LoginRoute = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, usertype: "admin" });
    if (!user) {
      res
        .status(400)
        .json({ status: "failure", message: "Invalid Credentials" });
    }
    const isPasswordValid = user.password === password;
    await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res
        .status(400)
        .json({ status: "failure", message: "Invalid Credentials" });
    }
    const token = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.status(200).json({
      status: "success",
      token,
      message: "Logged insuccesfully",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { LoginRoute, SignUpRoute };
