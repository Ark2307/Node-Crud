const express = require(`express`) ;
const dotenv = require(`dotenv`) ;
const morgan = require(`morgan`) ;
const bodyparser = require("body-parser") ;
const path = require(`path`) ;


const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000

// log requests
app.use(morgan('tiny'));

// parser request to body
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs")

// load components
app.use('/css',express.static(path.resolve(__dirname,"components/css"))) 
app.use('/js',express.static(path.resolve(__dirname,"components/js" ))) 

//load router
app.use('/',require('./server/routes/routers'))


app.listen(PORT , ()=> {console.log(`Server is running on http://localhost:${PORT}`)}) ;