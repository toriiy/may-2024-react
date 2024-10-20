import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import './Pagination.css'

type PaginationProps = {
    flag: boolean;
}
const Pagination: FC<PaginationProps> = ({flag}) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPageNum = +page;
            currentPageNum--;
            setQuery({page: currentPageNum.toString()})
        }
    };

    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPageNum = +page;
            currentPageNum++;
            setQuery({page: currentPageNum.toString()})
        }
    };

    return (
        <div className={'paginationDiv'}>
            <button onClick={onClickPrevHandler}>previous</button>
            <button onClick={onClickNextHandler} disabled={flag}>next</button>
        </div>
    );
};

export default Pagination;