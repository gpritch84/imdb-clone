import VideoButton from '../components/VideoButton';

const MovieCard = props => {
    const { information } = props;

    return (
        <>
            <div>
                <table className="table col-10">
                    <tbody>
                        {
                            information.map((info, i) => <tr key={i}>
                                <td><img alt="poster" width="150" src={`https://image.tmdb.org/t/p/w185/${info.poster_path}`} /></td>
                                <td>
                                    <h3>{info.title}</h3>
                                    <h5><i>Release Date: {info.release_date}</i></h5>
                                    <p>{info.overview}</p>
                                    <VideoButton information={info}/>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default MovieCard