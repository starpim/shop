var express = require('express');
var router = express.Router();
var db = require('../db');

/* 사용자목록 페이지 */
router.get('/', function(req, res, next) {
  res.render('index', {title:'사용자목록', pageName:'users/list.ejs'})
});

//사용자목록 JSON
router.get('/list.json', function(req, res){
    const sql='select * from users order by uname';
    db.get().query(sql, function(err, rows){
        res.send(rows);
    });
});

//로그인페이지
router.get('/login', function(req, res){
  res.render('index', {title:'로그인', pageName:'users/login.ejs'})
});

//로그인체크
router.post('/login', function(req, res){
    const uid=req.body.uid;
    const upass=req.body.upass;
    const sql='select * from users where uid=?';
    db.get().query(sql, [uid], function(err, rows){
        let result='0';
        if(rows[0]){
            if(rows[0].upass == upass){
                result='1';
            }else{
                result='2';
            }
        }
        res.send(result);
    });
});

//회원가입 페이지 이동
router.get('/insert', function(req, res){
    res.render('index', {title:'회원가입', pageName:'users/insert.ejs'});
});

//회원가입
router.post('/insert', function(req, res){
    const uid=req.body.uid;
    const upass=req.body.upass;
    const uname=req.body.uname;
    const phone=req.body.phone;
    const adress1=req.body.adress1;
    const address2=req.body.address2;
    console.log(uid,upass,uname,phone,adress1,address2);
    const sql="insert into users(uid,upass,uname,phone,adress1,address2) values(?,?,?,?,?,?)";
    db.get().query(sql,[uid,upass,uname,phone,adress1,address2], function(err, rows){
        res.redirect('/users/login')
    });
});


router.get('/insert', function(req, res)){
    res.render('index', {title:'회원가입', pageName:'users/insert.ejs'})
}

module.exports = router;