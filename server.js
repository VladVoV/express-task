const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

let books = [
    { id: 1, title: "Harry Potter and the Philosopher's Stone", reviews: [{ id: 1, comment: "Nice" }, { id: 2, comment: "The best book ever" }] },
    { id: 2, title: "The Lord of the Rings", reviews: [] }
]

function validateBookExists(req, res, next) {
    const bookId = parseInt(req.params.bookId)
    const book = books.find(b => b.id === bookId)
    if (!book) {
        return res.status(404).send(`Book with ID ${bookId} not found`)
    }
    req.book = book
    next()
}

function validateReviewExists(req, res, next) {
    const reviewId = parseInt(req.params.reviewId)
    const review = req.book.reviews.find(r => r.id === reviewId)
    if (!review) {
        return res.status(404).send(`Review with ID ${reviewId} not found`)
    }
    req.review = review
    next()
}

function validateCreateBook(req, res, next) {
    const { title } = req.body
    if (!title) {
        return res.status(400).send('Title is required')
    }
    next()
}

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:bookId', validateBookExists, (req, res) => {
    res.json(req.book)
})

app.put('/books/:bookId', validateBookExists, (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).send('Title is required')
    }
    req.book.title = title
    res.json(req.book)
})

app.post('/books', validateCreateBook, (req, res) => {
    const { title } = req.body
    const newBook = {
        id: books.length + 1,
        title,
        reviews: []
    }
    books.push(newBook)
    res.status(201).json(newBook)
})

app.post('/books/:bookId/reviews', validateBookExists, (req, res) => {
    const { comment } = req.body
    if (!comment) {
        return res.status(400).send('Comment is required')
    }
    const newReview = {
        id: req.book.reviews.length + 1,
        comment
    }
    req.book.reviews.push(newReview)
    res.status(201).json(newReview)
})

app.delete('/books/:bookId/reviews/:reviewId', validateBookExists, validateReviewExists, (req, res) => {
    const { review } = req
    const reviewIndex =req.book.reviews.indexOf(review)
    req.book.reviews.splice(reviewIndex, 1)
    res.sendStatus(204)
})

app.get('/books/:bookId/reviews', validateBookExists, (req, res) => {
    res.json(req.book.reviews)
})

app.listen(port, () => {
    console.log(`Book API listening at http://localhost:${port}`)
        })
