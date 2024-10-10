import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.service";
import './Users.css'

type IUsersProps = {
    showPosts: (user: IUser) => void
}
const Users: FC<IUsersProps> = ({showPosts}) => {

    const [usersArray, setUsersArray] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then((response) => setUsersArray(response.users));
    }, []);

    return (
        <div className={'gridContainer'}>
            {
                usersArray.map(user => <User showPosts={showPosts} user={user} key={user.id}/>)
            }
        </div>
    );
}

export default Users;