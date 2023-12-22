const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 8081;
const db = require('./models')
// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('listening on port');
    })
})
