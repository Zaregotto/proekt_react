import React, {useEffect, useState} from 'react';
import {moviesService} from "../../services";
import {useParams} from "react-router";




const Genres = () => {

    const [ganres, setGanres] = useState(null);

    const {category} = useParams();

    useEffect(() => {
         getGanres() ;
    }, []);
    const getGanres = async () => {
        moviesService.genres(category, {}).then(data => {
            console.log(data);
            setGanres(data);
        });
    }
    return (
        <div>
            {ganres ? ganres.map(item => (
                <span key={item.id}>
                {item.name}
            </span>)): null}
        </div>
    );
};

export {Genres};



