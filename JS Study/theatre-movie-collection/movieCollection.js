import { createMovie } from "./movie.js";

var movie1 = new Array();

function addMovie(movie) {
try {
  movie1.splice(0, 0, movie);
}         
catch(error){
      console.error("Error")
  }
}

function displayMovies(){
try {
       for(let i=0; i<movie1.length; i++){
           if(movie1[i] != null){
              console.log(`Title: ${movie1[i]["title"]} \n Genre: ${movie1[i]["genre"]} \n`);
            } 
           else if (movie1[i] === null){
              console.log("End of Catalogue");
              break;
          }
      }   
   }
catch (error) {
  console.error("Error");
   }
}

function searchMovies(genre, director){
try {
       for(let i=0; i<movie1.length; i++){
           if(genre == movie1[i]["genre"] || director == movie1[i]["director"]){
                   console.log(`The Movie Your searchng is ${movie1[i]["title"]}`);
                   break;
              } else if(i == movie1.length-1 && (genre != movie1[i]["genre"] && director != movie1[i]["director"])){
                    console.log("Not Found");
                    // break;
              } 
        }
    }
catch (error) {
      console.error("Error");
   }
}

export {addMovie, displayMovies, searchMovies};
