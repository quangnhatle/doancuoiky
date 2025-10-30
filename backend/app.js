//pass 227z6rjrOvRGaNpm

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/users",router);



mongoose.connect("mongodb+srv://quangnhatle6:227z6rjrOvRGaNpm@cluster0.dy1vpdq.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));