// 引用 Models
const { User } = require('../models')

class AuthController {
  getAuthUser = async (req, res) => {
    const users = await User.findAll()
    res.status(200).json({ message: 'User authentication details retrieved', users })
  }
}

module.exports = new AuthController()
