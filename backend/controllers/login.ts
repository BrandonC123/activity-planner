const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
import User from "../models/user";

loginRouter.post("/", async (request, response) => {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    const checkPassword = user
        ? bcrypt.compare(password, user.passwordHash)
        : false;
    if (!user && !checkPassword) {
        return response.status(401).json({
            error: "invalid email or password",
        });
    }
    const userDetails = {
        email: user.email,
        id: user._id,
    };
    const token = jwt.sign(userDetails, process.env.SECRET);
    response.status(200).send({ token, email: user.email, name: user.name });
});

export default loginRouter;
