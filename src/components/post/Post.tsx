import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './Post.css'

type PostProps = {
    post: IPost
}
const Post: FC<PostProps> = ({post}) => {
    return (
        <div className={'postDiv'}>
            <h3>User id: {post.userId}</h3>
            <h4>Id: {post.id}</h4>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;