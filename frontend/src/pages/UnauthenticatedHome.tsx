import { useEffect, useReducer, useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import { UserContext } from "../context/Context";

const UnauthenticatedHome = () => {
    const { state, dispatch } = useContext(UserContext);
    const [openLogin, setOpenLogin] = useState(false);
    const [email, setEmail] = useState<string>("brandon@gmail.com");
    const [password, setPassword] = useState<string>("brandonspassword");
    return (
        <div className="bg-landing-page w-full h-screen bg-center bg-no-repeat bg-black opacity-80">
            <header className="bg-transparent w-screen absolute p-4">
                <div className="w-4/5 flex justify-between mx-auto ">
                    <p className="text-white">WP</p>
                    <nav className="flex gap-8 text-xl text-white">
                        <Link className="" to={"/about"}>
                            About
                        </Link>
                        <button className="" onClick={() => setOpenLogin(true)}>
                            Log in <AccountCircleIcon />
                        </button>
                        <Link className="" to={"/signup"}>
                            Sign up
                        </Link>
                    </nav>
                </div>
            </header>
            <div className="text-white container mx-auto top-2/4 relative -translate-y-2/4">
                <h1 className="text-4xl">Track your workouts here</h1>
                <h2 className="text-2xl">
                    Keep track of various workouts including weight training and
                    cardio
                </h2>
            </div>
            <Dialog
                fullWidth
                open={openLogin}
                onClose={() => setOpenLogin(false)}
            >
                <DialogContent
                    sx={
                        {
                            // backgroundColor: "gray",
                        }
                    }
                >
                    <span className="text-3xl">Login</span>
                    <form>
                        <TextField
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenLogin(false)}>Close</Button>
                    <Button
                        onClick={() => {
                            UserService.loginUser(email, password);
                            dispatch({
                                type: "update user status",
                                payload: true,
                            });
                        }}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UnauthenticatedHome;
