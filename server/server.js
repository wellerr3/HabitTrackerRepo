const express = require("express");
const path = require("path");
const app = express();
const apiRouter = require("./routes/api.js");
<<<<<<< HEAD
const databaseRouter = require("./routes/database.js");
const PORT = 3000;
// const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/database", databaseRouter);

app.use("/build", express.static(path.join(__dirname, "../build")));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
=======
const databaseRouter = require('./routes/database.js');
const PORT = 3000; 
// const cors = require("cors")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/database', databaseRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use("/api", apiRouter);

app.get('/', (req,res)=> {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
>>>>>>> d430c20820b8373ef62686aea8d3071dd6bffc36
});

app.listen(PORT, () => {
  console.log(`The server is on on port ${PORT}. It's listening...`);
});
<<<<<<< HEAD
=======

module.exports = app;
>>>>>>> d430c20820b8373ef62686aea8d3071dd6bffc36
