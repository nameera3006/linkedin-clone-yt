import React, { useState } from 'react'
import "./Login.css";
import web from "../src/images/linkedin-full-logo.png"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const register = () => {
        if (!name) {
            return alert("Please enter a Full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }));
                    });
            }).catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURl,
                }))
            }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src={web} alt="" />

            <form action="">
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name (required if registering)" />

                <input type="text"
                    Value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile pic URL (optional)" />

                <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email" />

                <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password" />

                <button type="submit" onClick={loginToApp} >
                    Sign In
                </button>

            </form>

            <p>
                Not a memeber?{"  "}
                <span className="login_register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
