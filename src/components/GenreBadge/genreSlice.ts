import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {string} from "prop-types";

export interface GenreState {
  movieGenreList: {},
  tvGenreList: {}
  currentGenre: string,
  genres: []
}

const initialState: GenreState = {
  movieGenreList: {},
  tvGenreList: {},
  currentGenre: '',
  genres: []
}


export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    setListGenre: (state, action: PayloadAction<[]>) => {
      state.genres = action.payload;
    },
    setMoviesByGenre: (state, action: PayloadAction<{id: string, list: []}>) => {
      console.log("setMoviesByGenre", action)
      state.movieGenreList = {
        ...state.movieGenreList,
      [action.payload.id]: action.payload.list
      };
    },
    setTvByGenre: (state, action: PayloadAction<{id: string, list: []}>) => {
      console.log("setTvByGenre", action)
      state.tvGenreList = {
        ...state.tvGenreList,
        [action.payload.id]: action.payload.list
      };
    },
  },
})

export const { setGenre, setListGenre, setMoviesByGenre } = genreSlice.actions

export default genreSlice.reducer