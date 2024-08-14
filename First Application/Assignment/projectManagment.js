require('dotenv').config();
const express = require('express');
const app = express();
const data = require("../Assignment/proManDb");

app.use(express.json());

app.post("/Create", async (req, res) => {

     try {
            let {content, hours, name} = req.body;
            if(name == undefined){
                name = 'General'
            }
                const taskUpdate = await data.query(
                'INSERT INTO task (content, hours, person) VALUES (($1), ($2), ($3))',
                [content, hours, name] 
            );

            return res.status(200).json("updated");
        }      
    catch (error) {
        console.error(error.message)
        res.status(500).json(error);
    }
});

app.get("/Search", async (req, res) => {
       
    try {  
            const {taskId, person} = req.query;
            const task = await data.query(
                'SELECT * FROM task WHERE task_id = ($1) OR person = ($2)',
                [taskId, person]
            );
            if(task.rows.length === 0){
               return res.status(404).json("Nothing Found!")
             } 
                 return res.status(200).json(task.rows)     
    } catch (error) {
        console.error('Database query error:', error.message);
        res.status(500).json(error);
    }
});

app.put("/Edit", async(req, res) => {

    try {
        const {content, person} = req.body;
        const taskId = req.body.task_id;
        const change = await data.query(
            'UPDATE task SET content = ($1), person = ($2) WHERE task_id = ($3)',
            [content, person, taskId]
        );
        if(!taskId){
            return res.json("Task Id not found!") 
        }
        return res.status(200).json("Changed!") 
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Error")
}
});

app.delete("/delete", async(req, res) => {

    try {
        const taskId = req.body.task_id;
        const deleted = await data.query(
            'DELETE FROM task WHERE task_id = ($1)',
            [taskId]
        );
        console.log(taskId)
        res.status(200).json("Deleted");
        
    } catch (error) {
        res.status(500).json("Erorr");
    }
});

app.post("/addPerson", async(req, res) => {

    try {
        const {name}  = req.body;
        const add = await data.query(
            'INSERT INTO person (name) VALUES (($1))',
            [name]
        );
       
       return res.status(200).json("Person Added")
    } catch (error) {
        res.status(500).json("Erorr");
    }
});

app.delete("/remove", async(req, res) => {

    try {
        const byName = req.body.name; 
        const check = await data.query(
            'SELECT name FROM person WHERE name = ($1)',
            [byName]
        );
        const removed = await data.query(
            'DELETE FROM person WHERE name = ($1)',
            [byName]
        );
        console.log(check.rows)
        if(check.rows.length == 0){
             return res.status(200).json("No Data by such name");
        } else {
           return res.status(200).json("Deleted"); 
        }     
    } catch (error) {
       // console.log(error)
        res.status(500).json("Erorr");
    }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});