import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './CurrentUser.css'
import {Link} from "react-router-dom";

type UserProps = {
    user: IUser
}
const CurrentUser: FC<UserProps> = ({user}) => {
    return (
        <div className={'userDiv'}>
            <h2>Id: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <p>Email: {user.email}</p>
            <div>
                <h3>Address:</h3>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <div>
                    <h4>Geo:</h4>
                    <p>Lat: {user.address.geo.lat}</p>
                    <p>Lng: {user.address.geo.lng}</p>
                </div>
            </div>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <div>
                <h4>Company:</h4>
                <p>Name: {user.company.name}</p>
                <p>Catch phrase: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
            </div>
            <Link to={'user-posts'}>Show posts of user</Link>
        </div>
    );
};

export default CurrentUser;