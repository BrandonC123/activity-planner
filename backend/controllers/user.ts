const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
import User from "../models/user";

userRouter.get("/", async (request, response) => {
    const users = await User.find({});
    response.json(users);
});

userRouter.post("/", async (request, response) => {
    const { email, name, password } = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, name, passwordHash });
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
});

export default userRouter;
