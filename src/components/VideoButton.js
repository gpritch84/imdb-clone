import { useState, useEffect } from 'react';
import Axios from 'axios';

const VideoButton = props => {
    const { information } = props;

    const [video, setVideo] = useState([])

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${information.id}/videos?api_key=47e2f72a7a0202913b8f9e1d2c3532bd`)
            .then(res => { setVideo(res.data.results); })
            .catch(err => console.log(err))
    }, [information])

    return (
        <div>
            {
                video.map((trailer, i) =>
                    <a key={i} style={{display: "table-cell"}} href={`https://www.youtube.com/watch?v=${trailer.key}`} target='_blank' rel='noreferrer'>| Play Trailer! | </a>)
            }
        </div>
    );

}

export default VideoButton