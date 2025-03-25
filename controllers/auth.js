class AuthController {
  getAuthUser = async (req, res) => {
    res.status(200).json({ message: 'User authentication details retrieved' })
  }
}

module.exports = new AuthController()
