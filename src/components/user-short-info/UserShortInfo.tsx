import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
import './UserShortInfo.css'

type UserShortInfoProps = {
    user: IUser;
}
const UserShortInfo: FC<UserShortInfoProps> = ({user}) => {
    return (
        <div className={'shortUserIndoDiv'}>
            <h2>Id: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <p>Email: {user.email}</p>
            <Link state={{data: user}} to={user.id.toString()}>More info</Link>
        </div>
    );
};

export default UserShortInfo;