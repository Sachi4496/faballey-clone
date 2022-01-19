const express = require("express")
const app = express();
const PORT = process.env.PORT || 9999;
app.use(express.json())

const connect = require("./src/config/db");


const homeControler = require("./src/controllers/home");

const productController = require("./src/controllers/products.controller")
console.log("a")
// const movieControler = require("./controllers/movie.controller")

// const screenControler = require("./controllers/screen.controllers")

// const seatsController = require("./controllers/seats.controllers")

// const showController = require("./controllers/show.controllers")
// const theaterController = require("./controllers/theater.controllers")

app.use("",homeControler);
app.use("/products",productController);
// app.use("/movies",movieControler);
// app.use("/screens",screenControler);
// app.use("/seats",seatsController);
// app.use("/shows",showController);
// app.use("/theaters",theaterController);

app.listen(PORT, ()=>{
    connect();
    console.log(`server running on port ${PORT}`)
})