import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {moviesCategory, moviesService, movieType, tvType} from "../../Services";
import {MovieCard} from "../Movie-card";
import {OutlineButton} from "../Button";
import {MovieSearch} from "../Movie-grid";
import Genres from "../GenreBadge/genreContainer";
import {connect} from "react-redux";
import {AppDispatch} from "../../store";
import {setMoviesByGenre} from "../GenreBadge/genreSlice";


const Pagination = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    const {setMoviesByGenre, genresList} = props

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
                const params = {};
                switch (props.movie) {
                    case  moviesCategory.movie:
                        response = await moviesService.getListByGenreId(id, {params: {}})
                        break;
                    default:
                        response = await moviesService.getMovieListByGenreId(id, {params: {}})
                }
            }else {
                const params = {
                    query: keyword
                }
                response = await moviesService.search(props.category, {params});
            }
            setMoviesByGenre({
                id: props.currentGenre,
                list: response.results
            })
            console.log(genresList)
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        if (props.currentGenre) {
            if (genresList.hasOwnProperty(props.currentGenre) && genresList[props.currentGenre].length){
                setItems(genresList[props.currentGenre])
            }else {
                getGenre (props.currentGenre)
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
function mapStateToProps(state) {
    const { genres, currentGenre, genresList  } = state.genreReducer;
    return { genres, currentGenre, genresList }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMoviesByGenre: (movieList) => dispatch(setMoviesByGenre(movieList))
        // setGenre: (id: string) => dispatch(setGenre(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
