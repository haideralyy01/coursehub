const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { AdminModel, CourseModel } = require("../database/db.js");
const { adminMiddleware } = require("../middlewares/admin.js");
const { JWT_ADMIN_SECRET } = require("../configurations/config.js");
const admin = require("../middlewares/admin.js");
const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
    // Admin signup logic here...
    const { email, password, firstName, lastName } = req.body;
    
        try {
            await AdminModel.create ({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            });
    
            res.json({
                message: "Admin signed up successfully"
            })
        } catch (err) {
            res.status(500).json({
                message: "Error during signup",
                error: err.message
            });
        }
});

adminRouter.post("/login", async (req, res) => {
    // Admin login logic here...
    try {
        const { email, password } = req.body;

        const admin = await AdminModel.findOne({
            email: email
        });
        if(!admin) {
            return res.status(401).json ({
                message: "Admin does not exist"
            });
        }
        if (admin.password === password) {
            const token = jwt.sign({
                id: admin._id.toString()
            }, JWT_ADMIN_SECRET);
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

adminRouter.post("/create-course", adminMiddleware, async (req, res) => {
    // Create course logic here...
    const adminId = req.adminId;
    const { title, description, price, published, imgUrl} = req.body;

    try {
        const course = await CourseModel.create({
            title: title,
            description: description,
            price: price,
            published: published,
            imgUrl: imgUrl,
            creatorId: adminId
        });
        res.json({
            message: "Course created successfully",
            courseId: course._id
        });
    } catch (err) {   
        res.status(500).json({
            message: "Error creating course",
            error: err.message
        });
    }
});

adminRouter.put("/update-course", adminMiddleware, async (req, res) => {
    // Update course logic here...
    const { title, description, price, published, imgUrl, courseId} = req.body;

    try {
        const course = await CourseModel.findByIdAndUpdate(
            courseId,
            {
                title: title,
                description: description,
                price: price,
                published: published,
                imgUrl: imgUrl
            },
            { new: true }
        );
        res.json({
            message: "Course updated successfully",
            courseId: course._id
        });
    } catch (err) {   
        res.status(500).json({
            message: "Error updating course",
            error: err.message
        });
    }
});

adminRouter.get("/courses", adminMiddleware, async (req, res) => {
    // Get all courses logic here...
    const adminId = req.adminId;
    try {
        const courses = await CourseModel.find({
            creatorId: adminId
        });
        res.json({
            courses: courses
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching courses",
            error: err.message
        });
    }
});

module.exports = {
    adminRouter: adminRouter
}