import { Header } from "./Header"
import { connect } from 'react-redux';
import { setListGenre } from '../GenreBadge/genreSlice';
import { moviesService } from '../../services/movies.service';

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (id) => {
        console.log(id);
        moviesService.genres(id, {params:{}}).then(data => {
            dispatch(setListGenre(data.genres));
        });
    },
  }
}

export default connect(null, mapDispatchToProps)(Header)