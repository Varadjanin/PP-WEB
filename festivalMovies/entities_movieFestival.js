
function Movie(title, length, genre) {
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
    this.genreShort = genre[0].toUpperCase() + genre[genre.length-1].toUpperCase();             
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genreShort;
}
                
                
function Program(date) {
    if (!date) {
        throw new Error('Field Date is required');
    }

    this.date = new Date(date);
    this.listOfMovies = [];
}


Program.prototype.numberOfMoviesInProgram =  function() {        
    var count = 0;
    this.listOfMovies.forEach(function() {
        count ++;
    })
    return count;                   
}

Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
        throw new Error('Invalid movie data');
    };
    this.listOfMovies.push(movie);
    return "Movie added.";
}

Program.prototype.getTotalLengthOfAllMoviesInTheProgram = function () {
    var sum = 0;
    this.listOfMovies.forEach(function(movie) {
        sum += movie.length;
    });
    return sum + "min";
}

Program.prototype.getData = function () {
    var result = this.date + ", " + this.listOfMovies.length + " movies, duration:" + this.getTotalLengthOfAllMoviesInTheProgram();
    return result;
}


//testing:
// var movie = new Movie("j", 123, "drama");
// var program = new Program("11/11/2021");
// program.addMovie(movie);
// program.addMovie(movie);
// program.addMovie(movie);
// console.log(program.getData());
