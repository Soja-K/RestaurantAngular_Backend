const express=require('express')


//we want to import the data service 
const dataService = require('./services/dataservice')


const cors = require('cors')

const app=express()


// app.use(cors());


//create an app using express



//integrating the front end and bakeend
//give command() to share data via cors

app.use(cors({
    origin:' http://localhost:4200'

}))
//to parse json data from request body

app.use(express.json())//converting the data to json

//create port number


app.listen(3000,()=>{
    console.log('server listening on the port:3000');
})


app.post('/signup', (req, res) => {
    console.log(res.body);
    dataService.signup( req.body.uname,req.body.phno,req.body.email,req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result);
        })


})
app.post('/login', (req, res) => {
    console.log(res.body);
    dataService.login(req.body.email, req.body.pswd)
        .then(result => {

            res.status(result.statusCode).json(result);
        })
})


