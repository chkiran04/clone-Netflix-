// import React from 'react';
// import axios from "axios";
// import { Popular_Movie, options } from '../utils/constant';
// import { getPopularMovie } from '../redux/movieSlice';

// const useTopRatedMovies = async () => {
//     try {
//         const res = await axios.get(Popular_Movie, options);
//         dispatch(getPopularMovie(res.data.results));
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default useTopRatedMovies;


import axios from "axios";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movie, options } from "../utils/constant";
import {useDispatch} from "react-redux";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useTopRatedMovies;