import { AppDispatch, RootState } from './../../store';
import { Genres } from "./genres"
import { GenreState, setGenre } from "./genreSlice"
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setGenre: (id: string) => dispatch(setGenre(id)),
  }
}

function mapStateToProps(state: RootState) {
    const { genres, currentGenre } = state.genreReducer;
    return { genres, currentGenre }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)