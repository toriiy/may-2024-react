import React, {useEffect, useState} from 'react';
import Pagination from "../components/pagination/Pagination";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Comments from "../components/comments/Comments";
import comments from "../components/comments/Comments";
import {IComment} from "../models/IComment";

const CommentsPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const [comments, setComments] = useState<IComment[]>([]);

    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            apiService.commentService
                .getAll(+page)
                .then(value => {
                    setComments(value.comments);
                    const lastId = value.comments[value.comments.length - 1].id;
                    if (lastId >= value.total) {
                        setFlag(true);
                    } else {
                        setFlag(false);
                    }
                });
        }
    }, [query]);

    return (
        <div>
            <Comments comments={comments}/>
            <Pagination flag={flag}/>
        </div>
    );
};

export default CommentsPage;