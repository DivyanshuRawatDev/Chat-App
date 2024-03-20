import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "./../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exist" });
    }

    // Hashed password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Generate token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in Signup" + error);
  }
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("logout User");
};
