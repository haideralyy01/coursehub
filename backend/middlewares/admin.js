const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../configurations/config")

function adminMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            });
        }
        const decodedData = jwt.verify(token, JWT_ADMIN_SECRET);
        req.adminId = decodedData.id;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token",
            error: err.message
        });
    }
}

module.exports = {
    adminMiddleware: adminMiddleware,
}