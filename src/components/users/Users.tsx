import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import './Users.css'
import UserShortInfo from "../user-short-info/UserShortInfo";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    })

    return (
        <div>
            <h1 className={'heading'}>Users:</h1>
            <div className={'usersGridDiv'}>
                {users.map(user => <UserShortInfo user={user} key={user.id}/>)};
            </div>
        </div>
    );
};

export default Users;