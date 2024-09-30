import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

// Middleware to verify JWT token
export const authenticateUser = async (req, res, next) => {
  const token = req.cookies.access_token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(errorHandler(401, "Access Denied: No Token Provided"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifying token
    const user = await User.findById(decoded.id);  // Fetch user based on token

    if (!user) return next(errorHandler(404, "User not found"));

    req.user = user;  // Attach user data to request
    next();  // Move to next middleware or route handler
  } catch (error) {
    next(errorHandler(403, "Invalid or Expired Token"));
  }
};
