import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import Post from "../post/Post";
import './Posts.css'

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    })

    return (
        <div>
            <h2 className={'heading'}>Posts:</h2>
            <div className={'postsGridDiv'}>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
        </div>
    );
};

export default Posts;