import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
        this.setState({ movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <article className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="txt">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                genres={movie.genres}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                            />
                        ))}
                    </div>
                )}
            </article>
        )
    }
}

export default Home;