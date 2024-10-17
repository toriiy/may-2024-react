import React from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser";
import CurrentUser from "../components/user/CurrentUser";

const CurrentUserInfoPage = () => {
    const {state: {data}} = useLocation();
    const user: IUser = data;

    return (
        <div>
            <CurrentUser user={user}/>
        </div>
    );
};

export default CurrentUserInfoPage;