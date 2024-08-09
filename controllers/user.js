import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //res.json({name,email,password});

    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({
        msg: "already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, "registered successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      // return res.json({
      //     success:false,
      //     message:"Invalid username"
      // });

      return res.status(404).json({
        msg: "user not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      //     return res.json({
      //         success:false,
      //         message:"Invalid password"
      //     });

      return res.status(404).json({
        msg: "invalid password",
      });
    }

    sendCookie(user, res, `Welcome ${user.name}`, 201);
  } catch (error) {
    next(error);
  }
};

export const getUserbyId = async (req, res, next) => {
  try {
    res.status(201).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .json({
        success: true,
        user: req.user,
      });
  } catch (error) {
    next(error);
  }
};
