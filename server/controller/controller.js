var UserDB = require("../model/model");

//create new user function here
exports.create = (req,res) =>{

    //validate request first
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return ;
    }

    // register new user
    const user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save the details in database
    user.save(user)
        .then(data =>{
            res.redirect("/") ;
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred during creation."
            });
        });

}

// show users 
exports.find = (req,res)=>{

    // showing single user
    if(req.query.id){
        const id = req.query.id ;
        UserDB.findById(id).then(data =>{
            if(!data){
                res.status(404).send({message: `User not Found`})
            }
    
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message :`Could not find User with id =` +id});
        });
    }
    
    else{
        UserDB.find().then(user =>{
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message : err.message || "Unknown error occurred"});
        })
    }
}

// update users
exports.update = (req , res) =>{

    if(!req.body){
        return res.status(400).send({
            message: "No changes in the data made"
        });
        
    }

    // url parameter
    const id = req.params.id;
    UserDB.findByIdAndUpdate(id,req.body, {useFindAndModify : false}).then(data =>{
        if(!data){
            res.status(404).send({message: `User not Found`})
        }

        else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error in updating user information"
        });
    });

}

// delete users
exports.delete = (req , res) =>{
    
    const id = req.params.id; 
    UserDB.findByIdAndDelete(id).then(data =>{
        if(!data){
            res.status(404).send({message: `Check the user id again`})
        }

        else{
            res.send({message: "User deleted successfully."})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id =" +id
        });
    });
}