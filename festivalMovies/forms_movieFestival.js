//creating festival:
var festival = new Festival();

//selecting elements:

var movieTitle = document.querySelector(".movie_title");
var movieLength = document.querySelector(".movie_length");
var movieGenre = document.querySelector(".movie_genre");
var movieList = document.querySelector(".movie_list");
var dropdownMovies = document.querySelector(".dropdown_movies");


var programDate = document.querySelector(".program_date");
var programList = document.querySelector(".program_list");
var dropdownPrograms = document.querySelector(".dropdown_programs");

//_____________________________________________________
//create Movie:

function createMovie() {
    
    var newMovie = new Movie(movieTitle.value, parseInt(movieLength.value), movieGenre.value);
    var index = festival.allMovies.push(newMovie);
    
    var newLi = document.createElement("li");
    newLi.innerHTML = newMovie.getData();
    movieList.appendChild(newLi);
    
    
    //adding movie to the dropdown list:
    var movieOption = document.createElement("option");

    movieOption.innerHTML = newMovie.title;
    movieOption.setAttribute("value", index);
    dropdownMovies.appendChild(movieOption);
    

    //clearing the fields for new inputs:
    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "";
    
};

//_____________________________________________________________
//create Program:

function createProgram() {
    
    var newProgram = new Program(programDate.value);
    var index = festival.allPrograms.push(newProgram);

    
    var newLi = document.createElement("li");
    newLi.innerHTML = newProgram.getData();
    // newLi.classList.add('added');
    programList.appendChild(newLi);
    
    //adding program to the dropdown list:
    var option = document.createElement('option');
    option.setAttribute('value', index);
    option.innerHTML = newProgram.getData();
    dropdownPrograms.appendChild(option);
    
    
    //clearing the fields for new inputs:
    programDate.value = "";
}


//_____________________________________________________
//adding movie to the program:

function addMovieToTheProgram() {
    
    var programListElements = document.querySelectorAll(".program_list li");
    var programSelectOptions = document.querySelectorAll(".dropdown_programs option");

    var movieValue = parseInt(dropdownMovies.value);
    var programValue = parseInt(dropdownPrograms.value);

    // console.log(movieValue); //broji sve napravljene filmove
    // console.log(programValue);//broji sve napravljene programe

    var movie = festival.allMovies[movieValue-1];
    var program = festival.allPrograms[programValue-1];
    program.listOfMovies.push(movie);

    // console.log(movie);
    // console.log(program);

    programListElements[programValue-1].innerHTML = program.getData();
    programSelectOptions[programValue].innerHTML = program.getData();

};

var createMovieBtn = document.querySelector(".movie_create_button");
var createProgramBtn = document.querySelector(".program_create_button");
var addMovieToProgramBtn = document.querySelector(".add_movie_to_program_button");

createMovieBtn.addEventListener("click", createMovie);
createProgramBtn.addEventListener("click", createProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToTheProgram); 

