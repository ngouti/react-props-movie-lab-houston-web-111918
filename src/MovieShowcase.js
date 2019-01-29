import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
    // map over your movieData array and return the correct 
    return (movieData.map((object) => 
    (
      <MovieCard key={object.id} {...object}/>
      // <MovieCard key={object.id} title = {object.title} IMBDRating = {object.IMDBRating} genres = {object.genres} poster = {object.poter} />
    )
    )
    )
    // DONT FORGET TO RETURN
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
