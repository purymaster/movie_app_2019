import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <section className="movie_info">
            <img src={poster} alt={title} />
            <div className="movie_data">
                <h1 className="title">{title}<span className="year">({year})</span></h1>
                <ul className="genres">
                    {genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
                </ul>
                <p className="summary">{summary}</p>
            </div>
        </section>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;