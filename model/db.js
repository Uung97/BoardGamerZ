var Sequelize = require('sequelize')
var sequelize;

sequelize = new Sequelize("board_gamerz", "root", "jhon0316@@", {
    host:"localhost",
    port:"3306",
    dialect:"mysql",
    timezone:"+09:00",
    define:{
        freeTableName:true,
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
    }
})

var db = {};

db.products = sequelize.import(__dirname + "/products.js");

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;