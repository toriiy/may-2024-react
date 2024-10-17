import React, {FC} from 'react';
import './CurrentUserPost.css'
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";

type CurrentPostProps = {
    post: IPost
}
const CurrentUserPost: FC<CurrentPostProps> = ({post}) => {
    return (
        <div className={'userPostDiv'}>
            <h3>User id: {post.userId}</h3>
            <h4>Title: {post.title}</h4>
            <Link state={{data: post}} to={post.id.toString()}>More info</Link>
        </div>
    );
};

export default CurrentUserPost;