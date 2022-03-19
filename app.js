const express = require('express');
const app = express();
const ejs = require('ejs');
const db = require('./model/db')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/public', express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded())

const mainRouter = require('./router/mainRouter')
app.use('/', mainRouter)

app.listen(3000, function(req,res){

    db.sequelize.sync({force:false})
    console.log("server running...")
})