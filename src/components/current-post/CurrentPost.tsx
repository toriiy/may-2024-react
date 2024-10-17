import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";
import './CurrentPost.css'

type CurrentPostProps = {
    post: IPost
}
const CurrentPost: FC<CurrentPostProps> = ({post}) => {
    return (
        <div className={'currentPostDiv'}>
            <h3>User id: {post.userId}</h3>
            <h4>Id: {post.id}</h4>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
            <Link to={'post-comments'}>Show comments to this post</Link>
        </div>
    );
};

export default CurrentPost;