import React from 'react';
import CurrentPost from "../components/current-post/CurrentPost";
import {useLocation} from "react-router-dom";
import {IPost} from "../models/IPost";

const CurrentPostPage = () => {

    const {state: {data}} = useLocation();
    const post: IPost = data;

    return (
        <div>
            <CurrentPost post={post} key={post.id}/>
        </div>
    );
};

export default CurrentPostPage;