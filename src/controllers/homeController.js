const connection = require('../config/database')
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../services/CRUDServices')



const getHomepage = async (req, res) => {
  //process data
  // call moongose model

  //move function go into Services
  // let [results, fields] = await connection.query('select * from Persons');
  // console.log(">>> check data results: ", { listUsers: results })

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

  //call listUser from service
  let results = await getAllUsers();
  // console.log(">>> check data results: ", { listUsers: results })
  return res.render('home.ejs', { listUsers: results })

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
  let [results, fields] = await connection.query('INSERT INTO Persons(EMAIL,NAME,CITY) VALUES (?,?,?)',
    [email, name, city])
  console.log(">>> check data input: ", results)
  res.send(`Create user success ${email}`)
}

const getUpdatePage = async (req, res) => {
  // console.log(">>> check req: ", req.params)
  const userId = req.params.id;
  // console.log("check  userid: ", userId)
  let user = await getUserById(userId);
  console.log("check data user with userid: ", user)

  res.render('edit.ejs', { userEdit: user })
}

const postEditUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  await updateUser(id, email, name, city);
  // console.log("check res: ", user)
  // let results = await getAllUsers();
  // return res.render('home.ejs', { listUsers: results })
  res.redirect('/')
}

const postDeleteUser = async (req, res) => {
  // res.send('delete user success')
  //select user with id
  const userId = req.params.id;
  let user = await getUserById(userId);

  res.render('delete.ejs', { userEdit: user })
  // res.redirect('/')

}

const postHandleDeleteUser = async (req, res) => {
  console.log("check data id ", req.params.id)
  const userId = req.params.id;
  let a = await deleteUser(userId)
  console.log(">>> check a ", a)
  res.redirect('/')
}







module.exports = {
  getHomepage, getAbc, getExample,
  postCreateUser, getCreatePage, getUpdatePage, postEditUser,
  postDeleteUser, postHandleDeleteUser
}