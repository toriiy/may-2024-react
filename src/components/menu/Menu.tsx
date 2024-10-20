import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menuNav'}>
            <ul>
                <li>
                    <Link to={'/'} className={'navLink'}>Home</Link>
                </li>
                <li>
                    <Link to={'comments'} className={'navLink'}>Comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;