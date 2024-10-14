const express = require(express);
const app = express();

let port = 8080;

app.get('/', (req, res) => {
    console.log("Server is started");
});

app.listen(port,() => {
    console.log(`app listening on ${port}`);
}); 