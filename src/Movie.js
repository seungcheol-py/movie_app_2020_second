import React from "react";
import propTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h4 className="movie__year">{year}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="movie__genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  key: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};
// some movies don't have genres. (isRequired)X
export default Movie;
