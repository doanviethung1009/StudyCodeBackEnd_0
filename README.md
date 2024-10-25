# document :
# https://ejs.co/#install > ejs
# https://expressjs.com/en/guide/routing.html > express
# https://sidorares.github.io/node-mysql2/docs > mysql2
# https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs > add css to ejs

# sqlDB - ORM
# lib support nodejs be can load instance when we change value
# npm install --save-dev nodemon@2.0.20
# edit nodemon ./server.js  in package.json

# document about mysql2: https://sidorares.github.io/node-mysql2/docs 

# npm install --save-exact express-fileupload@1.4.0 upload file to node js
# document about express-fileupload: https://www.npmjs.com/package/express-fileupload

# npm install --save-exact mongoose-delete@0.5.4
# document about mongoose-delete: https://www.npmjs.com/package/mongoose-delete

# mongoDB - NoSQL - ODM

# about check file or folder exist in server
# document https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js

# about convert string to number need to input + in front of string
# use + to convert string to number
# example => message = await getAllDataCustomerService(+limit, +page, name);

# about pagination: 
# page variable is current page
# limit variable is number of item in page
# offset variable is number of item skip => offset = (page - 1) * limit
# document to use pagination and sort in find queries => https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
# Pagination using mongoose, express and jade - https://madhums.me/2012/08/20/pagination-using-mongoose-express-and-jade/

# about filter:
# need to use $regex to filter data and / / such as like % % in sql
# about regular expression => https://www.w3schools.com/jsref/jsref_obj_regexp.asp or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

# about docuemntation:
# mongodb => https://docs.mongodb.com/manual/reference/operator/query/regex/
# mongoose => https://mongoosejs.com/docs/api/query.html#query_Query-find
