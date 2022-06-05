import React from 'react';



import { useSelector } from 'react-redux';
import { RootState } from '../../store';


interface GenresProps {
    setMoviesByGenre: ({}:{id: string, list: []}) => void
    currentGenre: string;
    genres: [];
    setGenre: (id: string) => void;
}

function Genres(props: GenresProps){
    const { currentGenre, setGenre} = props;
    const currentGenreList: {id: string, name: string}[] = useSelector((state: RootState) => state.genreReducer.genres);
    return (
        <div className="genres">
            {currentGenreList ? currentGenreList.map(item => (
            <button key={item.id} disabled={item.id === currentGenre} onClick={() => {setGenre(item.id);}}>
                {item.name}
            </button>
            )): null}
        </div>
    );
}

export {Genres};



