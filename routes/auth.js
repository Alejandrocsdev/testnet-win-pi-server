const { Router } = require('express')
const router = Router()

const { authController } = require('../controllers')

router.get('/me', authController.getAuthUser)

module.exports = router
