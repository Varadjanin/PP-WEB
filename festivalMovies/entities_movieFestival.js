class Movie{
    constructor(title, length, genre) {
        if (!title) {
            throw new Error('Field Title is required');
        }
        if (!length) {
            throw new Error('Field Length is required');
        }
        if (typeof length === "string") {
            throw new Error('The length of the movie should be a number.');
        }
        if (!genre) {
            throw new Error('Field Genre is required');
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.genreShort = `${genre[0].toUpperCase() + genre[genre.length-1].toUpperCase()}`; 
    };
    getData() {
        return `${this.title}, ${this.length}min, ${this.genreShort}`;
    };
};


class Program{
    constructor(date) {
        if (!date) {
            throw new Error('Field Date is required');
        }
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        today = dd+'-'+mm+'-'+yyyy;
        this.date = today;
        this.listOfMovies = [];
    };
    numberOfMoviesInProgram() {
        var count = 0;
        this.listOfMovies.forEach(() => count++);
        return count;
    };
    addMovie(movie) {
        if (!movie || !(movie instanceof Movie)) {
            throw new Error('Invalid movie data');
        };
        this.listOfMovies.push(movie);
        return "Movie added.";
    };
    getTotalLengthOfAllMoviesInTheProgram() {
        var sum = 0;
        this.listOfMovies.forEach((movie) => sum += movie.length);
        return `${sum}min`;
    };
    getData() {
        var result = `${this.date}, ${this.listOfMovies.length} movies, duration: ${this.getTotalLengthOfAllMoviesInTheProgram()}`;
        return result;
    };
};


class Festival{
    constructor() {
        this.allMovies = [];
        this.allPrograms = [];
    };
};


//testing:
// var movie = new Movie("j", 123, "drama");
// var program = new Program("11/11/2021");
// program.addMovie(movie);
// program.addMovie(movie);
// program.addMovie(movie);
// console.log(program.getData());