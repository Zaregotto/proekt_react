import { AppDispatch, RootState } from '../../store';

import { connect } from 'react-redux';

import { Genres } from "./genres"
import { setGenre } from "./genreSlice"

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