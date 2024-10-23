const connection = require('../config/database') //import connection mysql
const { getAllUsers, getUserById, updateUser, deleteUser, createUser } = require('../services/CRUDServices')
const User = require('../models/Users')


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
  // console.log(">>> check data results: ", results)
  //let results = []

  return res.render('home.ejs', { listUsers: results }) // đưa dữ liệu vào trong file ejs

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
  try {
    let { email, name, city } = req.body;
    console.log(email, name, city);
    await createUser(email, name, city)
    res.redirect('/')

  } catch (e) {
    console.log(e)
    return res.send('An error occurred')
  }

  // console.log(">>> check data input: ", results)
  // res.send(`Create user success ${email}`)
}

const getUpdatePage = async (req, res) => {
  // console.log(">>> check req: ", req.params)
  const userId = req.params.id;
  console.log("check  userid: ", userId)
  let user = await getUserById(userId);
  // console.log("check data user with userid: ", user)

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
  // console.log("check data id ", req.body.id)
  const userId = req.body.id;
  let a = await deleteUser(userId)
  // console.log(">>> check a ", a)
  res.redirect('/')
}

const postTruncateTable = async (req, res) => {
  // for mysql:
  // let [results, fields] = await connection.query('TRUNCATE TABLE Persons')
  // for mongodb:
  await User.deleteMany({})
  res.redirect('/')
}







module.exports = {
  getHomepage, getAbc, getExample,
  postCreateUser, getCreatePage, getUpdatePage, postEditUser,
  postDeleteUser, postHandleDeleteUser, postTruncateTable
}