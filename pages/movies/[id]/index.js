import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";
import EditMovie from '../../../pages/movies/[id]/edit'
import ReactPlayer from 'react-player'

const Movie = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const { movie } = props;

    const handleDelteMovie = () => {
        deleteMovie(id).then(() => {
            router.push('/');
        });
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                {/* <img className="img-page" src={movie.image} alt="" width="328px" height="165px"/> */}
                <p className="lead">{movie.releaseYear}</p>
                <p className="lead">{movie.genre}</p>
                <hr className="my-4" />
                <p>{movie.description}</p>
                <div className="btn-group">
                    <button className="btn btn-primary btn-lg mr-1" href={movie.trailer} role="button">Go to watch the triler</button>
                    {/* <ReactPlayer 
                        url={movie.trailer}
                        // className='react-player'
                        // playing
                        width='100%'
                        height='100%'
                    /> */}
                    <EditMovie movie={movie} className="mr-2" />
                    {/* <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                        <button className="btn btn-warning btn-lg mr-1" role="button">Edit old</button>
                    </Link> */}
                    <button onClick={() => handleDelteMovie(id)} className="btn btn-danger btn-lg" href="#" role="button">Delete</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            {/* <p>
                Some description about the movie
            </p> */}
            <style jsx>{`
                    .img-page {
                        float:right;
                    }
                `}
            </style>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id);

    return { movie };
}

export default Movie;