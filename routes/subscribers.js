const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Get all subscribers
router.get('/', (req, res) => {
    res.send("Hello World")
})

// Get one subscirber
router.get('/:id', (req, res) => {

})

// Create one subscriber
router.post('/', (req, res) => {

})

// Update one subscriber
router.patch('/:id', (req, res) => {

})

// Delete one subscriber
router.delete('/:id', (req, res) => {

})

module.exports = router