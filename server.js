const express = require('express')
const app = express()
const logger = require('morgan');
const passport = require('passport')
const bodyParser = require('body-Parser')
const router = require('./MAC/src/routes/user.router')
const mogoClient = require('mongoose')

//setup connect monggo by 
mogoClient.connect('mongodb://localhost:27017/').then(() => console.log('Connect success')).catch(() => console.log('Connect failed'))
    //Middlewares
app.use(bodyParser.json())
app.use(logger('start'))
app.use(passport.initialize());
app.use('/', router)


//Start the server
const port = app.get('port') || 3000
app.listen(port, () => {
    console.log('Connect to server success with port', port)
})