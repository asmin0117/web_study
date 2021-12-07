var express = require('express');
var router = express.Router();
import { Animal } from '../public/javascripts/Animal';

const dog1 = new Animal('koko', 2);
const dog2 = new Animal('momo', 3);
const dog3 = new Animal('dodo', 6);

const dogs = new Array(dog1, dog2, dog3);
const sumAge = dogs.reduce((acc, cur) => acc + cur.age, 0);

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: `${dog1.name}` });
  res.render('index', { title: `${sumAge}` });
  //console.log("🚀 ~ file: index.js ~ line 11 ~ router.get ~ dog1.name", dog1.name);
});

module.exports = router;