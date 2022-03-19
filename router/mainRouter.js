const { query } = require('express')
const express = require('express')
const router = express.Router()
const db = require('../model/db')

router.get("/", function(req,res){
    res.render('main', {title:"Board GamerZ"})
})

router.get("/login", function(req,res){
    res.render('login', {title:"로그인"})
})

router.post("/data/create", function(req,res){
    let game_id = parseInt(Math.random() * 10000);
    let genre_id = req.body.genre_id;
    let title = req.body.title;
    let min_num = req.body.min_num;
    let max_num = req.body.max_num;
    let min_time = req.body.min_time;
    let max_time = req.body.max_time;
    let price = req.body.price;
    let poster_path = req.body.poster_path;
    db.products.create({
        game_id:game_id,
        genre_id:genre_id,
        title:title,
        min_num:min_num,
        max_num:max_num,
        min_time:min_time,
        max_time:max_time,
        price:price,
        poster_path:poster_path
    }).then(function(result){
        res.send({success:200})
    })
})

router.get("/data/read", function(req,res){
    db.products.findAll().then(function(result){
        res.send({success:200, data:result})
    })
})

router.post("/data/delete", function(req,res){
    let target_id = req.body.target_id;
    db.products.destroy({where:{game_id:target_id}}).then(function(result){
        res.send({success:200})
    })
})

module.exports = router;