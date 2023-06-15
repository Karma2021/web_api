const Bike = require('../models/bikes')

const getAllBikes = (req, res, next)=>{
    Bike.find()
        .then(bikes => res.json(bikes))
        .catch(next)
}

const createBikes = (req, res, next) => {
    Bike.create(req.body)
        .then((bikes) => res.status(201).json(bikes))
        .catch(next)
}
const deleteAllBikes = (req, res, next) => {
    Bike.deleteMany()
        .then(reply => res.json(reply))
        .catch(next)

}
// const getABookById = (req, res, next) => {

//     Book.findById(req.params.book_id)
//         .then((book) => {

//             //Custom error
//             if (!book) {
//                 res.status(404).json({ error: 'Book not found' })
//             }

//             res.json(book)
//         })
//         .catch(next)

// }
const updateABookById = (req, res, next) => {

    Book.findById(req.params.book_id)
        .then(book => {
            if (!book) return res.status(404).json({ error: "Book not found." })
            book.reviews = book.reviews.map((r) => {
                if (r.id === req.params.review_id) { // _id is of Object type and review_id is of String type, So, === can't be used. Later is id is of type string.
                    r.text = req.body.text
                }
                return r
            })
            book.save()
                .then(book => {
                    res.json(book.reviews.id(req.params.review_id))
                })
                .catch(next)
        })
        .catch(next)
}

// const deleteABookById = (req, res, next) => {
//     Book.findByIdAndDelete(req.params.book_id)
//         .then((reply) => res.json(reply)) //res.status(204).end()
//         .catch(next)
// }

module.exports = {
    getAllBikes,
    createBikes,
    deleteAllBikes,
    updateABookById
}
