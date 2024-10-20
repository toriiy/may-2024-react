import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import './Comment.css'

type CommentProps = {
    comment: IComment;
}
const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <div className={'commentDiv'}>
            <h3>Id: {comment.id}</h3>
            <h3>Post id: {comment.postId}</h3>
            <h3>Likes: {comment.likes}</h3>
            <p>{comment.body}</p>
            <div>
                <h4>User:</h4>
                <p>Id: {comment.user.id}</p>
                <p>Username: {comment.user.username}</p>
                <p>Full name: {comment.user.fullName}</p>
            </div>


        </div>
    );
};

export default Comment;
