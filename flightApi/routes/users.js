const { throws } = require('assert');
var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/data').localConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hii priyaaa...');
});

// register 

router.post('/register', (req, res, next) => {
  let {
    email,
    password,
    firstname,
    lastname

  } = req.body

  let insertcommand = `INSERT INTO Flight_project.register  (email,password,firstname,lastname)
   VALUES ('${email}','${password}','${firstname}','${lastname}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})



router.get('/flight', function (req, res, next) {
  dbConnection.query('select * from Flight_project.flights', (error, result, fields) => {
    if (error) throw error;
    res.send(result)
  })
})

//login
router.post('/login', (req, res, next) => {

  let {

    email,

    password

  } = req.body; // destructing of object property



  let userFound = `select * from flight_project.register  WHERE email = '${email}' and password= '${password}'`;
  dbConnection.query(userFound, (error, result, fields) => {
    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`)
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })

      }

    }
  });
});

router.post('/login', (req, res, next) => {
  let {
    email,
    password
  } = req.body; // destructing of object property 

  let userFound = `select * from Flight_project.register  WHERE email = '${email}' and password= '${password}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })
      }
    }

  });

});

// add flight details
router.post('/flight', (req, res, next) => {
  let {
    id,
    startPoint,
    destination,
    arrival,
    departure,
    amount
  } = req.body;
  console.log(req.body)
  let added = `INSERT INTO Flight_project.flights (id,startPoint,destination,arrival,departure,amount)
  VALUES (${id},'${startPoint}','${destination}','${arrival}','${departure}',${amount})`;
  dbConnection.query(added, (error, result, fields) => {
    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`)
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })

      }
    }
  })
})

//delete flight details
router.delete('/flightdel/:userid', (req, res, next) => {
  console.log(req.params.userid)
  let userid = req.params.userid;
  let deleletq = `delete from Flight_project.flights where id= '${userid}' `;
  dbConnection.query(deleletq, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      if (result.affectedRows) {
        res.send(`${userid} has been delete`)
      } else {
        res.send(`Unable to delete user, Not Found`);
      }
    }
  });
});

// update flight details
router.post('/flight', (req, res, next) => {
  let {
    id,
    startPoint,
    destination,
    arrival,
    departure,
    amount
  } = req.body;
  console.log('ajshdgfjkadsg',req.body)
  let added = `update Flight_project.flights set id=${id} startPoint=${startPoint},
  destination=${destination},arrival=${arrival},departure=${departure},amount=${amount}) where id=${id}`;
  console.log('query',added)
  dbConnection.query(added, (error, result, fields) => {
    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        res.json(result)
      } else {
        res.json({ message: 'user not found', usercount: 0 })

      }
    }
  })
})

module.exports = router;
