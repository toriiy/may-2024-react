import React, {useEffect, useState} from 'react';
import {getPostComments} from "../../services/api.service";
import {useParams} from "react-router-dom";
import {IComment} from "../../models/IComment";
import CurrentPostComment from "../current-post-comment/CurrentPostComment";

const CurrentPostComments = () => {

    const {id} = useParams();

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if (id) {
            getPostComments(id).then(value => setComments(value));
        }
    }, []);

    return (
        <div>
            {comments.map(comment => <CurrentPostComment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CurrentPostComments;