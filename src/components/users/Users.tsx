import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import User from "../user/User";
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    })

    return (
        <div>
            <h1 className={'heading'}>Users:</h1>
            <div className={'usersGridDiv'}>
                {users.map(user => <User key={user.id} user={user}/>)};
            </div>
        </div>
    );
};

export default Users;