import React from "react";

const MovieCart = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type !== "N/A" ? movie.Type : "NA"}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCart;