import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'navMenu'}>
            <ul>
                <li>
                    <Link to={'/'} className={'navLi'}>Home</Link>
                </li>
                <li>
                    <Link to={'/posts'} className={'navLi'}>Posts</Link>
                </li>
                <li>
                    <Link to={'/comments'} className={'navLi'}>Comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;