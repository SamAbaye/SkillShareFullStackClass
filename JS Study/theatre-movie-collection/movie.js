export function createMovie(title, director, genre){
  try {
    return {
        title: title,
        director: director,
        genre: genre
      };
    } catch (error) {
      console.error("Wrong input!");
  }
};


