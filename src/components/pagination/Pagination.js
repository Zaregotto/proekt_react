import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {moviesCategory, moviesService, movieType, tvType} from "../../Services";
import {MovieCard} from "../movie-card";
import {OutlineButton} from "../button";
import {MovieSearch} from "../movie-grid";
import Genres from "../GenreBadge/genreContainer";
import {setMoviesByGenre, setTvByGenre} from "../GenreBadge";


const Pagination = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    const {setMoviesByGenre, setTvByGenre, tvGenreList, movieGenreList} = props

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
    useEffect(() => {
        const getGenre = async (id) => {
            let response = null
            if (keyword === undefined) {
                switch (props.category) {
                    case  moviesCategory.movie:
                        response = await moviesService.getMovieListByGenreId(id, {params: {}})
                        setMoviesByGenre({
                            id: props.currentGenre,
                            list: response.results
                        })
                        break;
                    default:
                        response = await moviesService.getTvListByGenreId(id, {params: {}})
                        setTvByGenre({
                            id: props.currentGenre,
                            list: response.results
                        })
                }
            }else {
                const params = {
                    query: keyword
                }
                response = await moviesService.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        if (props.currentGenre) {
            if (movieGenreList && tvGenreList){
                switch(props.category) {
                    case moviesCategory.movie:
                        if (movieGenreList.hasOwnProperty(props.currentGenre) && movieGenreList[props.currentGenre].length) {
                            setItems(movieGenreList[props.currentGenre])
                        } else {getGenre(props.currentGenre)}
                        break;
                    default:
                        if (tvGenreList.hasOwnProperty(props.currentGenre) && tvGenreList[props.currentGenre].length) {
                            setItems(tvGenreList[props.currentGenre])
                        } else {getGenre(props.currentGenre)}
                }
            }else {
                getGenre(props.currentGenre)
            }
        }
    }, [props.currentGenre])


    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
                <Genres />
            </div>
            <div className="movie-grid">
                {
                    items.length && items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
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
function mapStateToProps(state) {
    const { genres, currentGenre, movieGenreList, tvGenreList  } = state.genreReducer;
    return { genres, currentGenre, movieGenreList, tvGenreList }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMoviesByGenre: (movieList) => dispatch(setMoviesByGenre(movieList)),
        setTvByGenre: (tvList) => dispatch(setTvByGenre(tvList))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
