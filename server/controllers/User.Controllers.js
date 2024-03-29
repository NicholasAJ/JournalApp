const UserJournal = require('../models/User.Model');
const secret = process.env.SECRET_Key;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  registerUser: async (req,res) => {
    try{
      const potentialUser = await UserJournal.findOne({email:req.body.email})
      if(potentialUser){
        res.status(400).json(({message: 'That email already exists, please login'}))
      }else{
        const newUser = await User.create(req.body)
        const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, secret, {expiresIn:'2h'})
        console.log(userToken);
        res.status(201).cooke('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).son (newUser);
      };
    }
    catch(err){
      res.status(400).json({error:err});
      console.log('caught on register user err');
    };
  },
  loginUser: async (req,res) => {
    console.log('login controller')
    try {
      const user = await UserJournal.findOne({email:req.body.email})
      if(user){
        const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
        if(passwordsMatch) {
          const userToken = jwt.sign({_id: user._id, email: user.email}, secret, {expiresIn:'2h'})
          console.log(userToken);
          res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).json(user);
        }else{
          res.status(400).json({message:'Invalid email or password'})
        }
      }
      else{
        res.status(400).json({message:'Invalid email or password'})
      };
    }
    catch(err){
      res.status(400).json({error:err});
    }
  },
  logout: (req,res) => {
    res.clearCookie('userToken').json({message:'You have been logged out'})
  }
};