import React from 'react';

import './movie-card.scss'

import { Link } from "react-router-dom";

import {Button} from "../button";

import {moviesCategory} from "../../services";
import {apiConfig} from "../../constants";
import {Badge} from "@mui/material";

const MovieCard = props => {

    const item = props.item;

    const link ='/' + moviesCategory[props.category] + '/' + item.id;

    const bg = apiConfig.width500Image(item.poster_path || item.backdrop_path);


    return (
        <Link to={link}>
            <Badge className='badge' badgeContent={item.vote_average} />
        <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <i className="bx bx-play"></i>
            </Button>
        </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

export {MovieCard};
