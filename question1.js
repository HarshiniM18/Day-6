//1. An instance of class Movie represents a film

class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies){
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie with the given details
const casinoRoyale = new Movie("Casino Royale","Eon Productions","PG-13");

//Example usage
const movies = [
    new Movie("Movie 1","Studio A","PG"),
    new Movie("Movie 2","Studio B","PG-13"),
    new Movie("Movie 3","Studio C","R"),
    new Movie("Movie 4","Studio D") // This movie will have default rating "PG"
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);


//output:
[
  Movie { title: 'Movie 1', studio: 'Studio A', rating: 'PG' },
  Movie { title: 'Movie 4', studio: 'Studio D', rating: 'PG' }
]
