import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    passwordHash: String,
    workouts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workout",
        },
    ],
});

userSchema.set("toJSON", {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj._v;
        delete returnedObj.passwordHash;
    },
});

const User = mongoose.model("User", userSchema);
export default User;
