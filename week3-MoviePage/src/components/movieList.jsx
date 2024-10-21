import { useEffect, useState } from 'react'
// import { MOVIES } from '../../mocks/movies.js'
import axios from 'axios';
import Card from '../components/card.jsx';
import * as S from '../components/style.js';

const MovieList = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/${props.to}?language=ko-KR&page=1`, {
                // headers: {
                //     Authorization: `Bearer myToken...`
                // }
            })
            setMovies(movies);
        }
        getMovies();
    }, []);
    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

export default MovieList