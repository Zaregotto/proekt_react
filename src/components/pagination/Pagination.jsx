import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {moviesCategory, moviesService, movieType, tvType} from "../../services/movies.service";
import {MovieCard} from "../movie-card";
import {OutlineButton} from "../button";
import {MovieSearch} from "../movie-grid";
import Genres from "../GenreBadge/genreContainer";


const Pagination = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch(props.category) {
                    case moviesCategory.movie:
                        response = await moviesService.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await moviesService.getTvList(tvType.popular, {params});
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await moviesService.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case moviesCategory.movie:
                    response = await moviesService.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await moviesService.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await moviesService.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
                <Genres />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadMore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}

export {Pagination};
