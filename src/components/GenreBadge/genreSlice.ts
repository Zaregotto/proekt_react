import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GenreState {
  currentGenre: string,
  genres:[]
}

const initialState: GenreState = {
  currentGenre: '',
  genres:[]
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
    }
  },
})

export const { setGenre, setListGenre } = genreSlice.actions

export default genreSlice.reducer