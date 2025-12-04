function movieLog() {

  // Array to store movies
  let movieList = [];

  // Add movies from the end
  function addMovieEnd(title, status, rating = "N/A") {
    movieList.push({
      title,
      status,
      rating,
    })
  }

  // Add movies to the start
  function addMovieStart(title, status, rating = "N/A") {
    movieList.unshift({
      title,
      status,
      rating,
    })
  }

  // Remove movies from the start
  const removeMovieStart = function () {
    let removedMovie = movieList.shift();
    console.log("Info of removed movie: ", removedMovie);
  }

  // Remove movies from the end
  const removeMovieEnd = function () {
    let removedMovie = movieList.pop();
    console.log("Info of removed movie: ", removedMovie);
  }

  // Display all movies
  const getAllMovies = () => {
    movieList.forEach(movie => console.log(movie));
  }

  // Display watched movies count
  const getWatchedCount = () => {
    let count = movieList.reduce((acc, movie) => {
      return movie.status === "Watched" ? acc + 1 : acc;
    }, 0);
    console.log(`Out of ${movieList.length} movies, you have watched ${count} movies.`);
  }

  // Display movies that are rated
  const getRatedMovies = () => {
    let ratedMovies = movieList.filter(movie => movie.rating != "N/A");
    ratedMovies.forEach(movie => console.log(movie));
  }

  // Display movies that are not rated
  const getNonRatedMovies = () => {
    let ratedMovies = movieList.filter(movie => movie.rating == "N/A");
    ratedMovies.forEach(movie => console.log(movie));
  }

  // Display all movie's title
  const getMoviesTitle = () => {
    return movieList.map((movie) => {
      return `${movie.title}`;
    })
  };

  return {
    addMovieEnd,
    addMovieStart,
    removeMovieEnd,
    removeMovieStart,
    getAllMovies,
    getWatchedCount,
    getRatedMovies,
    getNonRatedMovies,
    getMoviesTitle,
  }
}

// Created instance
const myMovies = movieLog();

myMovies.addMovieEnd("Zootopia", "Watched", 8);
myMovies.addMovieEnd("Zootopia 2", "Watchlist");
myMovies.addMovieEnd("One Battle After Another", "Watchlist");
myMovies.addMovieEnd("Godfather", "Watchlist");
myMovies.addMovieStart("Materialist", "Watched", 9);
myMovies.addMovieStart("Sinners", "Watched", 9);

myMovies.getAllMovies();

// myMovies.getWatchedCount();

// myMovies.getRatedMovies();

// myMovies.getNonRatedMovies();

// myMovies.removeMovieStart();
// myMovies.getAllMovies();

// myMovies.removeMovieEnd();
// myMovies.getAllMovies();

// console.log(myMovies.getMoviesTitle());
