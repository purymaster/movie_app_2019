import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        };
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="container">
                    <article className="movie_info detail">
                        <img src={location.state.poster} alt={location.state.title} />
                        <div className="movie_data">
                            <h1 className="title">{location.state.title}</h1>
                            <span className="year">{location.state.year}</span>
                            <ul className="genres">
                                {location.state.genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
                            </ul>
                            <p className="summary">{location.state.summary}</p>
                        </div>
                    </article>
                </div>
            )
        } else {
            return null;
        };
    }
}

export default Detail;