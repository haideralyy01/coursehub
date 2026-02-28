require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});