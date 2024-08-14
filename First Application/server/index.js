require('dotenv').config();
const express = require('express');
const app = express();
const pool = require("./db");

app.use(express.json());

app.get("/search", async (req, res) => {
    
    try {
            const bookTitle = req.query.title;
            const bookSearch = await pool.query(
                'SELECT * FROM books WHERE title ILIKE ($1)',
                [`%${bookTitle}%`]
            );
            console.log(bookSearch);
         if(bookSearch.rows.length === 0){
           return res.status(404).json("Book not Found!")
        }

            res.json(bookSearch.rows);
         } 
    catch (error) {
        res.status(500).json("Internal server Error");
    }

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 