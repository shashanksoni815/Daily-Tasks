const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.use("/public", express.static("public"));

let tasks = [
    {
        id : uuidv4(),
        task : "Complete CSS",
        description : "flex and grid commmand",
    },
    {
        id : uuidv4(),
        task : "Complete notes",
        description : "for up coming MSTs",
    },
    {
        id : uuidv4(),
        task : "Read Book",
        description : "minimum 5 pages",
    },
];

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   });

app.get("/tasks/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/tasks", (req, res) => {
    let { task, description } = req.body;
    let id = uuidv4();
    tasks.push({id, task, description });
    res.redirect("/tasks");
});

app.get("/tasks/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let task = tasks.find((t) => id === t.id);
    res.render("show.ejs", {task});
});

app.get("/tasks", (req, res) => {
    res.render("index.ejs", { tasks });
    // res.send("Server is started")
});

app.listen(port, () => {
    console.log(`app listening on ${port}`);
}); 