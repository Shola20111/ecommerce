import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: "Token invalid" });
  }
};
