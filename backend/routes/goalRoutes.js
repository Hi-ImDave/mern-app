const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// READ and CREATE
router.route('/').get(getGoals).post(setGoal)

// DELETE and UPDATE 
router.route('/:id').delete(deleteGoal).put(updateGoal)



module.exports = router