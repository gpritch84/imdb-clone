import Axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Display = props => {

    const [information, setInformation] = useState([])
    
    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=47e2f72a7a0202913b8f9e1d2c3532bd&query=${props.search}`)
            .then(res => setInformation(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    return (
        <>
            <div>
                <MovieCard information={information} />
            </div>
        </>
    );

}

export default Display