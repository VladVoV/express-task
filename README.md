# Commands that using this API
1 - to create book: POST request: http://localhost:3000/books and enter values in body
2 - to get list of books: GET request: http://localhost:3000/books
3 - to get book by id: GET request: http://localhost:3000/books/1 where "1" is the ID of the book
4 - to edit book title: PUT request: http://localhost:3000/books/1, where "1" is the ID of the book and then in the body: "title": "your title"
5 - to add review for a book: PUT request: http://localhost:3000/books/1/reviews, where 1 is the ID of the book and then in the body: "comment": "Your comment"
6 - to delete review by id: DELETE request: http://localhost:3000/books/1/reviews/2 where 1 is the ID of the book and 2 is the ID of the review
7 - to recieve list of reviews by book id: GET request: http://localhost:3000/books/1/reviews/2, where 1 is the ID of the book and 2 is the ID of the review
