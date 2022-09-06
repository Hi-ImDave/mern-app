const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// CREATE
router.post('/', registerUser)
router.post('/login', loginUser)

// READ
router.get('/me', protect, getUser)

module.exports = router