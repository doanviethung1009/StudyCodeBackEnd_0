const connection = require('../config/database')



const getHomepage = (req, res) => {
  //process data
  // call moongose model
  // let users = [];
  // connection.query(
  //     'SELECT * FROM USERS',
  //     function (err, results, fields) {
  //         users=results
  //       console.log(results); // results contains rows returned by server
  //       //console.log(fields); // fields contains extra meta data about results, if available
  //       console.log("check user ", users)
  //     //   res.send('Hello World from home controller')
  //       res.send(JSON.stringify(users))
  //     }
  //   );
  return res.render('home.ejs')

}

const getAbc = (req, res) => {
  res.send('Hello abc from home controller')
}

const getExample = (req, res) => {
  res.render('sample.ejs')
}


const postCreateUser = (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;
  let { email, name, city } = req.body;
  console.log(email, name, city);

  // Using placeholders
  connection.query(
    'INSERT INTO Persons(EMAIL,NAME,CITY) VALUES (?,?,?)',
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send(`Create user success ${email}`)
    }
  );

}




module.exports = { getHomepage, getAbc, getExample, postCreateUser }