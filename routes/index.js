var express = require('express');
var router = express.Router();

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pasheko',
  database: 'aes_callcenter'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/llamadas',(req,res)=>{
  connection.execute(
    'SELECT * FROM `llamadas`',
    function(err, results, fields) {
      res.status(200).json({results});

      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      // If you execute same statement again, it will be picked from a LRU cache
      // which will save query preparation time and give better performance
    }
  );
  
});


module.exports = router;
