const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/UserRoutes");
const { connection } = require("./config/db");

const app = express();
const port = "4500";
app.use(express.json());
app.use(cors());

app.use("/", userRouter);


app.listen(port, async () => {
    try {
        await connection;
    } catch (err) {
        console.log("error");
    }
    console.log(`server is running at port ${port}`);
});