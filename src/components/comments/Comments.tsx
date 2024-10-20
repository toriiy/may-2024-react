import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";
import './Comments.css'

type CommentsProps = {
    comments: IComment[]
}
const Comments: FC<CommentsProps> = ({comments}) => {
    return (
        <div className={'commentsGridDiv'}>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;