import express from "express";
import connect from "./db.js";

const app = express();


app.listen(3001, () =>{
    connect().then(console.log).catch(console.error);
    console.log("holaaaa")
});

