const { Router } = require("express");
const { userMiddleware } = require("../middlewares/user")
const mongoose = require("mongoose");
const {CourseModel, PurchaseModel} = require("../database/db.js");

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    //Purchase course logic here....
    const userId = new mongoose.Types.ObjectId(req.userId);
    const { courseId } = req.body;
    await PurchaseModel.create({
        userId: userId,
        courseId: courseId
    });
    res.json({
        message: "Course purchased successfully"
    });
});

courseRouter.get("/", async (req, res) => {
    //All courses on site logic here....
    const courses = await CourseModel.find({});
    res.json({
        courses: courses
    });
});
module.exports = {
    courseRouter: courseRouter
}