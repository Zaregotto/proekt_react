import { configureStore } from '@reduxjs/toolkit'
import genreReducer  from './components/GenreBadge/genreSlice';

export const store = configureStore({
  reducer: {
    genreReducer: genreReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch