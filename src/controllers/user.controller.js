const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  async signup( req, res ) {
    try {
      const { username, email, password } = req.body;
      const encPassword = await bcrypt.hash( password, 8)
      const user = await User.create({ username, email, password: encPassword })

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60*60*24 }
      );
      res.status(201).json({ token })
    }
    catch(err) {
      res.status(400).json({ message: err.message })
    }
  },
}
