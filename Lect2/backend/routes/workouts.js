const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers') 

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Requier Auth for all routes
router.use(requireAuth)

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)


// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router