const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { z } = require('zod');
const { userMiddleware } = require("../middlewares/user.js")
const { UserModel, PurchaseModel } = require("../database/db.js");
const { JWT_USER_SECRET } = require("../configurations/config")
const userRouter = Router();


userRouter.post("/signup", async (req, res) => {
    //Signup logic here....
    const { email, password, firstName, lastName } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create ({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });

        res.json({
            message: "User signed up successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Error during signup",
            error: err.message
        });
    }
    
});

userRouter.post("/login", async (req, res) => {
    //Login logic here....
    try {
        const { email, password} = req.body;

        const user = await UserModel.findOne({
            email: email
        });

        if(!user) {
            return res.status(401).json ({
                message: "User does not exist"
            });
        }
        const passwordMatched = await bcrypt.compare(password, user.password);

        if (passwordMatched) {
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_USER_SECRET);
            res.json ({
                token: token
            });
        }
        else {
            res.status(401).json ({
                message: "Invalid credentials"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Error during login",
            error: err.message
        });
    }
});

userRouter.get("/purchases", userMiddleware, async (req, res) => {
    //Get enrolled courses logic here....
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
        userId: userId,
    }).populate('courseId');
    res.json({
        purchasedCourses: purchases
    });
});

module.exports = {
    userRouter: userRouter
}