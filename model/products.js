module.exports = function(sequelize, DataTypes){
    return sequelize.define('products',{
        idx:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },
        game_id: {
            type:DataTypes.STRING(250)
        },
        genre_id:{
            type:DataTypes.STRING(250)
        },
        title:{
            type:DataTypes.STRING(250)
        },
        min_num:{
            type:DataTypes.STRING(250)
        },
        max_num:{
            type:DataTypes.STRING(250)
        },
        min_time:{
            type:DataTypes.STRING(250)
        },
        max_time:{
            type:DataTypes.STRING(250)
        },
        price:{
            type:DataTypes.STRING(250)
        },
        poster_path:{
            type:DataTypes.STRING(250)
        }
    })
}