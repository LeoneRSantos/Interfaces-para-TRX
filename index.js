var express = require("express");
app = express();
const log = require("./log.js");


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/login.html")
})

app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/home.html")
})

app.get("/transmission", function (req, res) {
    res.sendFile(__dirname + "/trasmission.html")
})

app.get("/run-log/:parametro", (req, res) => {
    const parametro = req.params.parametro;
    log(parametro);
    res.send(`Log executado com sucesso para o parâmetro: ${parametro}`);
});



app.listen(3000);