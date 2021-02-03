const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  async signup( req, res ) {
    try {
      console.log(req.body)
      const { name, email, password } = req.body;
      const encPassword = await bcrypt.hash( password, 8)
      const user = await User.create({ name, email, password: encPassword })
      console.log(user)
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60*60*24 }
      );
      res.status(201).json({ token })
    }
    catch(err) {
      console.log(err)
      res.status(400).json({ message: err.message })
    }
  },

  async show( req, res ) {
    try {
      const user = await User.findById( req.user )

      if( !user ) {
        throw new Error('User not found')
      }
        res.status(200).json({ message: 'User found', data: user })
    }
    catch(error) {
      res.status(404).json({ message: 'User not found' })
    }
  },

  async update( req, res ) {
    try{
      const user = await User
        .findByIdAndUpdate( req.user, req.body, { new: true, useFindAndModify: false,})

      if( !user ) {
        throw new Error('Could not update that user')
      }

      res.status(200).json({ message: 'User updated', data: user})
    }
    catch(error) {
      res.status(400).json({ message: 'User could not be updated'})
    }
  },

  async destroy( req, res ){
    try {
      const  user = await User.findByIdAndDelete(req.user)

      if( !user ) {
        throw new Error('Could not delete that user')
      }

      res.status(200).json({ message: 'User deleted', data: user, })
    }
    catch(err) {
      res.status(400).json({ message: 'User could not be deleted' })
    }
  },
}
