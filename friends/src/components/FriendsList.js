import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

export const FriendsList = () => {
    const [ friendsList, setFriendsList ] = useState([]);
    const [ user, setUser ] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res.data);
            setFriendsList(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const changeHandler = (e) => {
        setUser({
            ...user,
            id: new Date(),
            [e.target.name]: e.target.value
        })
    }

    const addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/friends", user)
            .then(res => {
                console.log(res);
                setFriendsList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
        {friendsList.map(friend => {
            return(
                <div key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            )
        })}
        <form>
                <input name="name" value={user.name} onChange={changeHandler} />
                <input name="age" value={user.age} onChange={changeHandler}/>
                <input name="email" value={user.email} onChange={changeHandler}/>
                <button onClick={addFriend}>Add</button>
            </form>
        </div>
    );
};