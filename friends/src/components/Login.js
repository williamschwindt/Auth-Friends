import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
    const[ user, setUser ] = useState({
        username: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const login = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", user)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/friendslist');
        })
    };

    return(
        <form>
            <input name="username" value={user.username} onChange={changeHandler} />
            <input name="password" value={user.password} onChange={changeHandler}/>
            <button onClick={login}>Log In</button>
        </form>
    );
};