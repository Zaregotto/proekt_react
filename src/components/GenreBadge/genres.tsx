import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface GenresProps {
    currentGenre: string;
    genres: [];
    setGenre: (id: string) => void;
}

function Genres(props: GenresProps){
    const { currentGenre, genres, setGenre} = props;
    const currentGenreList: {id: string, name: string}[] = useSelector((state: RootState) => state.genreReducer.genres);
    return (
        <div>
            {currentGenreList ? currentGenreList.map(item => (
            <button key={item.id} disabled={item.id === currentGenre} onClick={() => {setGenre(item.id);}}>
                {item.name}
            </button>
            )): null}
        </div>
    );
};

export {Genres};



