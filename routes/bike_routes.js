const express = require('express')

const route = express.Router()
const Bike = require('../models/bikes')

const bike_Controller = require('../controllers/bike_controller')

route.route('/')
    .get(bike_Controller.getAllBikes)
    .post(bike_Controller.createBikes)
    .put((req, res) => {
        res.status(405).json({ error: "Put request is not allowed" })
    })
    .delete(bike_Controller.deleteAllBikes)

// route.route('/:book_id')
//     .get(bike_Controller.getABookById)
//     .post((req, res) => {
//         res.status(405).json({ error: 'POST REQUEST apne bap se lekar ana' })
//     })
//     .put(bike_Controller.updateABookById)
//     .delete(bike_Controller.deleteABookById)

module.exports = route