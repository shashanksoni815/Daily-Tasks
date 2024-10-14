const express = require(express);
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    console.log("Server is started");
});

app.listen(port,() => {
    console.log(`app listening on ${port}`);
}); 