const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.use("/public", express.static("public"));

let tasks = [
    {
        task : "Complete CSS",
        description : "flex and grid commmand",
    },
    {
        task : "Complete notes",
        description : "for up coming MSTs",
    },
    {
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

app.get("/tasks", (req, res) => {
    res.render("index.ejs", { tasks });
    // res.send("Server is started")
});

app.listen(port, () => {
    console.log(`app listening on ${port}`);
}); 