let movies = [];

function Movie(title, rating, genre) {
    this.title = title;
    this.rating = rating;
    this.genre = genre;
}

function movieCounter() {
    let count = 0;
    return () => console.log(`Movies added: ${++count}`);
}
const countMovie = movieCounter();

const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const genreInput = document.getElementById("genre");
const movieList = document.getElementById("movieList");

function showMovies(list) {
    movieList.innerHTML = "";
    list.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.genre}) - ${movie.rating}`;
        li.onclick = () => removeMovie(movie);
        movieList.appendChild(li);
    });
}

function addMovie() {
    try {
        const title = titleInput.value.trim();
        const rating = Number(ratingInput.value);
        const genre = genreInput.value.trim();

        if (!title || !genre || rating < 1 || rating > 10) {
            throw new Error("Invalid input");
        }

        movies.push(new Movie(title, rating, genre));
        countMovie();
        showMovies(movies);

        titleInput.value = ratingInput.value = genreInput.value = "";
    } catch (e) {
        alert(e.message);
    }
}

function removeMovie(movie) {
    movies = movies.filter(m => m !== movie);
    showMovies(movies);
}

document.getElementById("addMovie").onclick = addMovie;

document.getElementById("filterHigh").onclick = () => showMovies(movies.filter(m => m.rating >= 8));

document.getElementById("showAll").onclick = () => showMovies(movies);
