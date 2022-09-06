const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// READ and CREATE
router.route('/').get(protect, getGoals).post(protect, setGoal)

// DELETE and UPDATE 
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)



module.exports = router