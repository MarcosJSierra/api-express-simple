import express from "express";

const app = express();


app.get("/", (req, res) => res.send(
    "<h1>API Simple con Express</h1>"
));

app.listen(5000, () => {
    console.log("Servidor escuchando al puerto 5000")
});


export { app }