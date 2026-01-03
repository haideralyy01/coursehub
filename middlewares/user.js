const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../configurations/config")

function userMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            });
        }
        const decodedData = jwt.verify(token, JWT_USER_SECRET);
        req.userId = decodedData.id;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token",
            error: err.message
        });
    }
}

module.exports = {
    userMiddleware: userMiddleware,
}