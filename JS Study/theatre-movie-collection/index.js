import { addMovie, displayMovies, searchMovies } from "./movieCollection.js";
import { createMovie } from "./movie.js";

let movie  = createMovie("inception", "Christopher Nolan", "Science Fiction, Thriller");
let movie2 = createMovie("The Shawshank Redemption", "Frank Darabont", "Drama");
let movie3 = createMovie("The Godfather", "Francis Ford Coppola","Crime, Drama");
let movie4 = createMovie("The Dark Knight","Christopher Nolan","Action, Crime, Drama");
let movie5 = createMovie("Pulp Fiction", "Quentin Tarantino","Crime, Drama");
let movie6 = createMovie( "Fight Club", "David Fincher","Drama");
let movie7 = createMovie("Schindler's List", "Steven Spielberg", "Biography, Drama, History");

addMovie(movie);
addMovie(movie2);
addMovie(movie3);
addMovie(movie4);
addMovie(movie5);
addMovie(movie6);
addMovie(movie7);

displayMovies();
searchMovies("Biography, Drama, History", "Steven Spielberg")
searchMovies("jhkj", "Cjhdjs");
searchMovies("Action, Crime, Drama", "Christopher Nolan");
searchMovies("Engda", "Sew lesew");
searchMovies("Drama", "Frank Darabont")
searchMovies("jhkj", "Cjhdjs");

