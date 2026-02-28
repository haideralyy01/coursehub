const mongoose = require("mongoose");

// Async IIFE to connect to MongoDB with try-catch
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
})();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema ({
    email: {type: String, unique: true},
    password: String, 
    firstName: String,
    lastName: String
});

const adminSchema = new Schema ({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    published: Boolean,
    imgUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema ({
    userId: ObjectId,
    courseId: {
        type: ObjectId,
        ref: 'course'
    }
});

const UserModel = mongoose.model('users', userSchema);
const AdminModel = mongoose.model('admins', adminSchema);
const CourseModel = mongoose.model('course', courseSchema);
const PurchaseModel = mongoose.model('purchases', purchaseSchema);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}



