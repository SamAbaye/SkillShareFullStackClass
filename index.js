const express = require("express");
const app = express();

app.use(express.json());

let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Fight Club",
    "The Lord of the Rings: The Return of the King",
    "The Empire Strikes Back"
  ];

app.get('/Search'), async (req, res) => {
        console.log("does it work?")
      let result = [];
    try {
        const {name} = req.query;
        for (let i = 0; i < movies.length; i++){
            if(name == movies[i]){
                result.push(name);   
            }     
            if(result.length === 0){
                res.status(400).json('Movie not Found')
            }
        }
        res.status(200).json(result)
    }   catch (err) {
            res.status(500).json({ message: 'Internal Server Error' }); 
    }
}
app.post('/Delete'), async(req, res) => {
    const {oldMovie} = req.body
    try {
        for(let i=0; i<movies.length; i++){
            if(oldMovie == movies[i]) {
                movies[i].slice(i, 1);
                res.status(200).json["deleted"];
            } else {
                res.status(500).json("Movie Not found");
            }
        }
       
    } catch (error) {
          res.status(400).json(error);
    }
}
app.post('/AddMovies'), async(req, res) => {

    try {
        const {newMovie} = req.body
        if(!newMovie){
        //  res.status(400).json("No mo");
         movies.push(newMovie)
         res.status(200).json("Movie Added Sucessfully!"); 
        }
          
    } catch (error) {
        res.status(500).json("impossble!")
    }
}

app.post('/Edit'), async(req, res) => {

    try {
        const {oldMovie, newMovie} = req.body
        for(let i = 0; i<movies.length; i++){
            if(oldMovie == movies[i]){
                movies.splice(i, 1, newMovie);
                res.status(200).json(movies[i]);
            } else {
                res.status(400).json("Movie Doesn't Exist!")
            }
        }
          
    } catch (error) {
            res.status(404).json(error);
    }
}
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//http://localhost:3000/Search?name=Inception