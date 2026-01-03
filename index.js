require("dotenv").config();
const express = require("express");
console.log(process.env.MONGO_URL)
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});