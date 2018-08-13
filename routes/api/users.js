const express = require('express');
const router = express.Router();

//Load User model
const User = require('../../models/User');

//@route:    get api/users/tests
//@desc:     tests users route
//@access:   public
router.get('/test', (req,res) => res.json({ msg: 'Users works'}));

//@route:    get api/users/register
//@desc:     register user
//@access:   public
router.post('/register', (req,res) => {
    User.findOne({email: req.body.email})
        .then(user =>{
            if(user){
                return res.status(400).json({email:'Email already exists'});
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err, console.log(err));   
            }
        });
});
module.exports = router;
