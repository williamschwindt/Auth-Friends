import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
    const[ user, setUser ] = useState({
        username: "",
        password: ""
    })

    const changeHandler = () => {

    }

    const login = () => {

    }

    return(
        <form>
            <input name="username" value={user.username} onChange={changeHandler} />
            <input name="password" value={user.password} onChange={changeHandler}/>
            <button onClick={login}>Log In</button>
        </form>
    );
};