import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import './Comment.css'

type CommentProps = {
    comment: IComment
}
const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <div className={'commentDiv'}>
            <h3>Post id: {comment.postId}</h3>
            <h4>Id: {comment.id}</h4>
            <h4>Name: {comment.name}</h4>
            <h4>Email: {comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;