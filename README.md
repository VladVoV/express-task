# Commands that using this API
1. - to create book: POST request: http://localhost:3000/books and enter values in body<br/>
1. - to get list of books: GET request: http://localhost:3000/books<br/>
1. - to get book by id: GET request: http://localhost:3000/books/1 where "1" is the ID of the book<br/>
1. - to edit book title: PUT request: http://localhost:3000/books/1, where "1" is the ID of the book and then in the body: "title": "your title"<br/>
1. - to add review for a book: PUT request: http://localhost:3000/books/1/reviews, where 1 is the ID of the book and then in the body: "comment": "Your comment"<br/>
1. - to delete review by id: DELETE request: http://localhost:3000/books/1/reviews/2 where 1 is the ID of the book and 2 is the ID of the review<br/>
1. - to recieve list of reviews by book id: GET request: http://localhost:3000/books/1/reviews/2, where 1 is the ID of the book and 2 is the ID of the review<br/>
