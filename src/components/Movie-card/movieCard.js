import React from 'react';

import {Badge} from "@mui/material";
import { Link } from "react-router-dom";

import {Button} from "../Button";
import {moviesCategory} from "../../Services";
import {apiConfig} from "../../Constants";

import './movie-card.scss'

const MovieCard = props => {

    const item = props.item;

    const link ='/' + moviesCategory[props.category] + '/' + item.id;

    const bg = apiConfig.width500Image(item.poster_path || item.backdrop_path);


    return (
        <Link to={link}>
            <Badge className="badge" badgeContent={item.vote_average}/>  {/*рейтинг фільмів*/}
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
