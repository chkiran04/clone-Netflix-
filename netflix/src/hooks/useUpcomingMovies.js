// import React from 'react';
// import axios from "axios";
// import { Popular_Movie, options } from '../utils/constant';
// import { getPopularMovie } from '../redux/movieSlice';

// const useUpcomingMovies = async () => {
//     try {
//         const res = await axios.get(Popular_Movie, options);
//         dispatch(getPopularMovie(res.data.results));
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default useUpcomingMovies;

import axios from "axios";
import {getUpcomingMovie } from "../redux/movieSlice";
import {Upcoming_Movie, options } from "../utils/constant";
import {useDispatch} from "react-redux";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;