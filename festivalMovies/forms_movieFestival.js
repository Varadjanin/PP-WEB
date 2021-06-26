//selecting elements:

var movieTitleNode = document.querySelector(".movie_title");
var movieLengthNode = document.querySelector(".movie_length");
var movieGenreNode = document.querySelector(".movie_genre");
var movieList = document.querySelector(".movie_list");
var dropdownMovies = document.querySelector(".dropdown_movies");


var programDateNode = document.querySelector(".program_date");
var programList = document.querySelector(".program_list");
var dropdownPrograms = document.querySelector(".dropdown_programs");

//_____________________________________________________
//create Movie:

function createMovie() {
    
    var newMovie = new Movie(movieTitleNode.value, parseInt(movieLengthNode.value), movieGenreNode.value);
    
    var newLi = document.createElement("li");
    newLi.textContent = newMovie.getData();
    movieList.appendChild(newLi);
    
    //adding movie to the dropdown list:
    dropdownMovies.innerHTML += "<option value='" + newLi.textContent + "'>'" + newLi.textContent +"'</option>" + "\n";
    
    //clearing the fields for new inputs:
    movieTitleNode.value = "";
    movieLengthNode.value = "";
    movieGenreNode.value = "";
    
};

//_____________________________________________________________
//create Program:

function createProgram() {
    
    var newProgram = new Program(programDateNode.value);
    
    var newLi = document.createElement("li");
    newLi.textContent = newProgram.getData();
    newLi.classList.add('added');
    programList.appendChild(newLi);
    
    //adding program to the dropdown list:
    dropdownPrograms.innerHTML += "<option value='" + newLi.textContent + "'>'" + newLi.textContent +"'</option>" + "\n";
    
    //clearing the fields for new inputs:
    programDateNode.value = "";
}


//_____________________________________________________
//adding movie to the program:

function addMovieToTheProgram() {
    //ne sabira kad dodam drugi film u isti program
    
    var selectedMovieNode = dropdownMovies.value;
    var selectedProgramNode = dropdownPrograms.value;
    
    var movieElements = selectedMovieNode.split(', ');
    var movietitle = movieElements[0];
    var durationMin = movieElements[1];
    var duration = parseInt(durationMin.split('min')[0]);
    var genreInitials = movieElements[2];
    var moviegenre;
    Array.from(movieGenreNode).forEach(function(genreLine) {
        if(genreInitials[0].toUpperCase()===genreLine.value[0]) {
            moviegenre = genreLine.value;
        }
    });
    
    var newMovie = new Movie(movietitle, duration, moviegenre);
    
    var programElements = selectedProgramNode.split(', ');
    var programDate = programElements[0];
    // // var numberOfMovies = programElements[1].split(' ')[0];
    // // var durationMin = programElements[2].split(':')[1];
    // // var durationNum = durationMin.split('min')[0];
    
    var newProgram = new Program(programDate);
    
    newProgram.addMovie(newMovie);
    
    // console.log(newProgram);
    // console.log(newMovie.length);
    // console.log(newMovie.getData());
    
    // console.log(newProgram.listOfMovies);
    // console.log(newProgram.numberOfMoviesInProgram());
    // console.log(newProgram.getTotalLengthOfAllMoviesInTheProgram());
    // console.log(newProgram.getData());
    
    var updatedProgram = newProgram.getData();
    
    var liAdded = document.querySelectorAll(".added");
    
    for(var i=0; i<liAdded.length; i++) {
        if(liAdded[i].innerText == selectedProgramNode) {
            liAdded[i].innerText = updatedProgram;
        }
    };
    
    var opcije = Array.from(dropdownPrograms.children);
    
    for(var y=0; y<opcije.length; y++) {
        if(opcije[y].innerText == "'"+selectedProgramNode+"'") {
            opcije[y].innerText = "'"+updatedProgram+"'";
            opcije[y].value = "'"+updatedProgram+"'";
        }
    };
    
    //clearing fields for adding move to the program:
    selectedMovieNode = '';
    selectedProgramNode = '';
};

var createMovieBtnNode = document.querySelector(".movie_create_button");
var createProgramBtnNode = document.querySelector(".program_create_button");
var addMovieToProgramBtnNode = document.querySelector(".add_movie_to_program_button");

createMovieBtnNode.addEventListener("click", createMovie);
createProgramBtnNode.addEventListener("click", createProgram);
addMovieToProgramBtnNode.addEventListener("click", addMovieToTheProgram); 

