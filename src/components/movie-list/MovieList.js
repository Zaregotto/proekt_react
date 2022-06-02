import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import './movie-list.scss'

import { SwiperSlide, Swiper } from "swiper/react";

import {moviesService, moviesCategory} from "../../services";


import {MovieCard} from "../movie-card";

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case moviesCategory.movie:
                        response = await moviesService.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await moviesService.getTvList(props.type, {params});
                }
            } else {
                response = await moviesService.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export {MovieList};
