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


module.exports = { getHomepage, getAbc, getExample }