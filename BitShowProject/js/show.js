//const repo = localStorage.getItem("id");
//const cardHolder = $(".cardHolder");
const url3 = "http://api.tvmaze.com/shows/"

// $(document).ready(() => {
//  showMovieInfo();
//  showSeasons(repo);
//  showCast(repo);


// });


const run = (id) =>{
  showMovieInfo(id);
  showSeasons(id);
  showCast(id);
  showCrew(id);
}



const showMovieInfo =(id) => 
$.ajax({
  url: `${url3}${id}`,
  method: "GET",
}).done((response) => {
  $("h2").html("");
    cardHolder.html('')
    let card = `<h1 class="mb-5 mt-5 text-center">${response.name}</h1>
          <div class="card mb-3 border-0" style="max-width: 1000px;">
            <div class="row ">
            <div class="col-8">
            <img src="${response.image.original}" class="img-fluid " alt="...">
            </div>
            <div class="col-4">
             <div class="card-body">
             <ul class='seasons'></ul>
             <ul class='cast'></ul>
             <ul class='crew'></ul>
           </div>
           </div>
           </div>
          </div>
          <h2>Show Details</h2>
          ${response.summary}`;
    cardHolder.append(card);
  }).fail(() => {
    alert("Network error");
  });


  //adding seasons to list
const showSeasons = (id) => {
  $.ajax({
    url: `${url3}${id}/seasons`,
    method: 'GET',
  }).done((response) => {
    let numberOfSeasons = `<h2> Seasons(${response.length})</h2>`
    $('.card-body').prepend(numberOfSeasons);
    response.forEach((element) => {
      let seasons = `
              <li>${element.premiereDate} - ${element.endDate}</li>
              
              `;
      $(".seasons").append(seasons);
    });
  });
};


//adding cast to list
const showCast = (id) => {
  $.ajax({
    url: `${url3}${id}/cast`,
    method: 'GET'
  }).done((response) => {
    let listOfCast = `<h2>Cast</h2>`;
    $('.seasons').after(listOfCast);
    response.forEach((element) => {
      let castMembers = `
              <li>${element.person.name}</li>
              
              `;
      $(".cast").append(castMembers);
    });
  });
};


//adding crew to list
const showCrew = (id) => {
  $.ajax({
    url: `${url3}${id}/crew`,
    method: 'GET'
  }).done((response) => {
    let listOfCrew = `<h2>Crew</h2>`;
    $(".cast").after(listOfCrew);
    response.forEach((element) => {
      let crewMembers = `
              <li>${element.type}: ${element.person.name}</li>
              
              `;
      $(".crew").append(crewMembers);
    })
  });
};