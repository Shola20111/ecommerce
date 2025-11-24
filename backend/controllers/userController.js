import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT token
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "7d" });
};


export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ name, email, password }); // ❗ REMOVE manual hashing

    const token = generateToken(newUser._id);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Logged-in User
export const getMe = async (req, res) => {
  try {
    // req.user is loaded by middleware
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.error("GetMe Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

//fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); 
    res.status(200).json({ data: users });
  } catch (error) {
    console.error("Get All Users Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};



// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;

    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const {
      firstname,
      lastname,
      email,
      phone,
      oldPassword,
      newPassword,
      confirmPassword,
    } = req.body;

    // ---- TEXT FIELDS UPDATE ----
    const updates = {};

    if (firstname || lastname) {
      updates.name = `${firstname || ""} ${lastname || ""}`.trim();
    }

    if (email) updates.email = email;
    if (phone) updates.phone = phone;

    // ---- PASSWORD CHANGE ----
    if (oldPassword || newPassword || confirmPassword) {

      // check old password
      const isMatch = await user.comparePassword(oldPassword);
      if (!isMatch) {
        return res.status(400).json({ message: "Old password is incorrect" });
      }

      // check new passwords match
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      // update password only via updateOne (no validation for other fields)
      await User.updateOne(
        { _id: id },
        { $set: { password: newPassword } }
      );
    }

    // ---- UPDATE OTHER FIELDS ----
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    const token = generateToken(updatedUser._id);

    res.status(200).json({
      message: "Profile updated successfully",
      updatedUser,
      token,
    });

  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
    }catch (error) {
    console.error("Delete User Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
