const express = require('express');
require('dotenv').config();
require('./adapters/connectionDb');
const aluminiRoutes = require('./routes/alumini.routes');




console.log("hello")
let app = express();

//! It is used to accept json data from the req body
app.use(express.json())

//! Serves static file from our server
app.use(express.static('./public/'))


//? Alumini Routes
app.use("/api/alumini", aluminiRoutes)


//! Page Not Found Middleware
app.use("*", (req, res, next) => {
  res.status(404).json({ error: true, message: "Page Not Found" })
})

//! Error Handling Middleware

app.use((err, req, res, next) => {
  res.status(400).json({ error: true, message: err.message, data: "OK" })
})

let PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`)
})