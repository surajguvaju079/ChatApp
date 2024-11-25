import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded)
      return res.status(401).json({ success: false, message: "Invalid token" });

    //console.log(decoded);
    req.id = decoded.userId;
    next();

    return res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "some error occured" });
  }
};
