import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../models/IPost";
import {getPostsOfUser} from "../../services/api.service";
import './PostsOfCurrentUser.css'
import CurrentUserPost from "../current-user-post/CurrentUserPost";

const PostsOfCurrentUser = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if (id) {
            getPostsOfUser(id).then(value => setPosts(value));
        }
    }, []);


    return (
        <div className={'postsGrid'}>
            {posts.map(post => <CurrentUserPost post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsOfCurrentUser;