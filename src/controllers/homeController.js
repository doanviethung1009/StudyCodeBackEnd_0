const connection = require('../config/database')



const getHomepage = async (req, res) => {
  //process data
  // call moongose model
  //async await
  // let users = [];
  // try {
  //   const [row, fields] = await connection.query('select * from Persons');
  //   console.log(">>> check data ", row, fields)
  // } catch (e) {
  //   console.log(e)
  // }

  //callback function
  // connection.query(
  //   'SELECT * FROM USERS',
  //   function (err, results, fields) {
  //     users = results
  //     console.log(results); // results contains rows returned by server
  //     //console.log(fields); // fields contains extra meta data about results, if available
  //     console.log("check user ", users)
  //     //   res.send('Hello World from home controller')
  //     res.send(JSON.stringify(users))
  //   }
  // );
  return res.render('home.ejs')

}

const getAbc = (req, res) => {
  res.send('Hello abc from home controller')
}

const getExample = (req, res) => {
  res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;
  let { email, name, city } = req.body;
  console.log(email, name, city);

  // Using placeholders
  //call back function
  // connection.query(
  //   'INSERT INTO Persons(EMAIL,NAME,CITY) VALUES (?,?,?)',
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send(`Create user success ${email}`)
  //   }
  // );
  // connection.query()
  //async await

  let [results, fields] = await connection.query('INSERT INTO Persons(EMAIL,NAME,CITY) VALUES (?,?,?)',
    [email, name, city])
  console.log(">>> check data input: ", results)
  res.send(`Create user success ${email}`)

}




module.exports = { getHomepage, getAbc, getExample, postCreateUser, getCreatePage }