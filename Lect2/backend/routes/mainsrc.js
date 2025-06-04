const express = require('express')

const router = express.Router()

// Message for main screen
router.get('/', (req, res) => {
    res.json({msg: "Welcome to the main screen, go to homescreen at http://localhost:4000/home/"})
})

module.exports = router