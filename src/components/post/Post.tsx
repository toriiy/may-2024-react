import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './Post.css'

type IPostProps = {
    post: IPost
}
const Post: FC<IPostProps> = ({post}) => {
    return (
        <div className={'postDiv'}>
            <h2>Id: {post.id}</h2>
            <h3>User id: {post.userId}</h3>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
            <h3>Tags:</h3>
            <ul>
                <li>{post.tags[0]}</li>
                <li>{post.tags[1]}</li>
                <li>{post.tags[2]}</li>
            </ul>
            <div>
                <h3>Reactions:</h3>
                <p>Likes: {post.reactions.likes}</p>
                <p>Dislikes: {post.reactions.dislikes}</p>
            </div>
            <p>Views: {post.views}</p>
        </div>
    );
};

export default Post;