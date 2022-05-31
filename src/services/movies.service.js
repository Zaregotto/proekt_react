import {axiosService} from "./axios.service";
// eslint-disable-next-line no-unused-vars
import {type} from "@testing-library/user-event/dist/type";

export const moviesCategory = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air:'on_the_air'
}

const moviesService = {
    detail: (cate, id, params) => {
        const url = moviesCategory[cate] + '/' + id;
        return axiosService.get(url, params);
    },
    credits: (cate, id) => {
        const url = moviesCategory[cate] + '/' + id + '/credits';
        return axiosService.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = moviesCategory[cate] + '/' + id + '/similar';
        return axiosService.get(url, {params: {}});
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosService.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosService.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = moviesCategory[cate] + '/' + id + '/videos';
        return axiosService.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + moviesCategory[cate];
        return axiosService.get(url, params);
    },
}

export {moviesService};

