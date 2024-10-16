import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/api.service";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";
import './Comments.css'

const Comments = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(value => setComments(value));
    })

    return (
        <div>
            <h2 className={'heading'}>Comments:</h2>
            <div className={'commentsGridDiv'}>{comments.map(comment => <Comment key={comment.id}
                                                                                 comment={comment}/>)}</div>
        </div>
    );
};

export default Comments;