const axios = require('axios') ;



exports.homeRoutes = (req,res) =>{
    // get all users,make get request
    axios.get(`http://localhost:3000/api/users`).then(function(response){

        res.render(`index` , {users : response.data}) ;
        
    })
    .catch(err => {
        res.send(err) ;
    })
}

exports.addUser = (req,res) =>{
    res.render('add_user')
}

exports.updateUser = (req,res) =>{
    axios.get(`http://localhost:3000/api/users`,{ params : {id : req.query.id}})
        .then(function(clientData){
            res.render(`update_user` , {user : clientData.data})
        })
        .catch(err => {
            res.send(err) ;
        })
}