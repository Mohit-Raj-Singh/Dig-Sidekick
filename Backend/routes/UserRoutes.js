const express = require("express");
const { UserModel } = require("../model/UserModel");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.get("/GET/users", async (req, res) => {
    try {
        const data = await UserModel.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

userRouter.get("/GET/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const singleData = await UserModel.findById(id);
        res.send({ singleData });
    } catch (error) {
        res.send({ msg: error.msg });
    }
});

userRouter.post("/POST/users", async (req, res) => {
    try {
        const data = req.body;
        const newData = new UserModel(data);
        await newData.save();
        const token = await jwt.sign({ foo: 'bar' }, 'mohit');
        res.send({ newData, token });

    } catch (error) {
        res.send(error.message);
    }
});

userRouter.put("users/update/:id", async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const updated = await UserModel.findByIdAndUpdate(id, data);

        res.send({ msg: "User updated" });
    }
    catch (error) {
        res.send({ msg: error.message });
    }
});

userRouter.delete("/users/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deleted = await UserModel.findByIdAndDelete(id);
        if (deleted) {
            res.send({ msg: "User deleted" });
        } else {
            res.send({ msg: "User not found" });
        }
    } catch (error) {
        res.send({ msg: error.message });
    }
});

module.exports = { userRouter };