
 
const getHomepage = (req,res) => {
    //process data
    // call moongose model
    

    res.send('Hello World from home controller')
}

const getAbc = (req,res) => {
    res.send('Hello abc from home controller')
}

const getExample = (req,res) => {
    res.render('sample.ejs')
}   


module.exports = { getHomepage, getAbc, getExample}