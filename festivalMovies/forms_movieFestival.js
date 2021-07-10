//creating festival:
const festival = new Festival();

//selecting elements:

let movieTitle = document.querySelector(".movie_title");
let movieLength = document.querySelector(".movie_length");
let movieGenre = document.querySelector(".movie_genre");
let movieList = document.querySelector(".movie_list");
let dropdownMovies = document.querySelector(".dropdown_movies");


let programDate = document.querySelector(".program_date");
let programList = document.querySelector(".program_list");
let dropdownPrograms = document.querySelector(".dropdown_programs");

//_____________________________________________________
//create Movie:

function createMovie() {
    
    let newMovie = new Movie(movieTitle.value, parseInt(movieLength.value), movieGenre.value);
    let index = festival.allMovies.push(newMovie);
    
    let newLi = document.createElement("li");
    newLi.innerHTML = newMovie.getData();
    movieList.appendChild(newLi);
    
    
    //adding movie to the dropdown list:
    let movieOption = document.createElement("option");

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
    
    let newProgram = new Program(programDate.value);
    let index = festival.allPrograms.push(newProgram);

    
    let newLi = document.createElement("li");
    newLi.innerHTML = newProgram.getData();
    // newLi.classList.add('added');
    programList.appendChild(newLi);
    
    //adding program to the dropdown list:
    let option = document.createElement('option');
    option.setAttribute('value', index);
    option.innerHTML = newProgram.getData();
    dropdownPrograms.appendChild(option);
    
    
    //clearing the fields for new inputs:
    programDate.value = "";
}


//_____________________________________________________
//adding movie to the program:

function addMovieToTheProgram() {
    
    let programListElements = document.querySelectorAll(".program_list li");
    let programSelectOptions = document.querySelectorAll(".dropdown_programs option");

    let movieValue = parseInt(dropdownMovies.value);
    let programValue = parseInt(dropdownPrograms.value);

    // console.log(movieValue); //broji sve napravljene filmove
    // console.log(programValue);//broji sve napravljene programe

    let movie = festival.allMovies[movieValue-1];
    let program = festival.allPrograms[programValue-1];
    program.listOfMovies.push(movie);

    // console.log(movie);
    // console.log(program);

    programListElements[programValue-1].innerHTML = program.getData();
    programSelectOptions[programValue].innerHTML = program.getData();

};

let createMovieBtn = document.querySelector(".movie_create_button");
let createProgramBtn = document.querySelector(".program_create_button");
let addMovieToProgramBtn = document.querySelector(".add_movie_to_program_button");

createMovieBtn.addEventListener("click", createMovie);
createProgramBtn.addEventListener("click", createProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToTheProgram); 