import { connect } from 'react-redux';

import { Header } from "./header"
import { setListGenre } from '../GenreBadge/genreSlice';
import { moviesService } from '../../Services';

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (id) => {
        if (id) moviesService.genres(id, {params:{}}).then(data => {
                dispatch(setListGenre(data.genres));
            });
    },
  }
}

export default connect(null, mapDispatchToProps)(Header)