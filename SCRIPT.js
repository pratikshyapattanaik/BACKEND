const axios = require('axios');

// Mock API URL for book shop (This would be your API endpoint in a real scenario)
const apiUrl = 'https://example.com/api/books';

// Task 1: Get the book list available in the shop
async function getBookList() {
    try {
        const response = await axios.get(apiUrl);
        return response.data; // List of books
    } catch (error) {
        console.error('Error fetching book list:', error);
    }
}

// Task 2: Get the book based on ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(${apiUrl}/${isbn});
        return response.data; // Book details for given ISBN
    } catch (error) {
        console.error('Error fetching book by ISBN:', error);
    }
}

// Task 3: Get all books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(${apiUrl}?author=${author});
        return response.data; // Books by given author
    } catch (error) {
        console.error('Error fetching books by author:', error);
    }
}

// Task 4: Get all books based on Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(${apiUrl}?title=${title});
        return response.data; // Books with the given title
    } catch (error) {
        console.error('Error fetching books by title:', error);
    }
}

// Task 5: Get book Review (Mock data, assuming it's available in the API)
async function getBookReview(isbn) {
    try {
        const response = await axios.get(${apiUrl}/${isbn}/review);
        return response.data; // Book review for the given ISBN
    } catch (error) {
        console.error('Error fetching book review:', error);
    }
}

// Task 6: Register a new user (mock API)
async function registerNewUser(user) {
    try {
        const response = await axios.post('https://example.com/api/users/register', user);
        return response.data; // New user registration confirmation
    } catch (error) {
        console.error('Error registering new user:', error);
    }
}

// Task 7: Login as a registered user (mock API)
async function loginUser(username, password) {
    try {
        const response = await axios.post('https://example.com/api/users/login', { username, password });
        return response.data; // Login success or failure response
    } catch (error) {
        console.error('Error logging in:', error);
    }
}

// Registered Users:

// Task 8: Add/Modify a book review
async function addOrModifyReview(isbn, userId, review) {
    try {
        const response = await axios.put(${apiUrl}/${isbn}/review, { userId, review });
        return response.data; // Updated book review
    } catch (error) {
        console.error('Error adding or modifying review:', error);
    }
}

// Task 9: Delete book review
async function deleteBookReview(isbn, userId) {
    try {
        const response = await axios.delete(${apiUrl}/${isbn}/review, { data: { userId } });
        return response.data; // Confirmation of review deletion
    } catch (error) {
        console.error('Error deleting book review:', error);
    }
}

// Node.js methods using async/await or Promises

// Task 10: Get all books using async callback function
function getBooksAsyncCallback() {
    axios.get(apiUrl)
        .then(response => {
            console.log('Books:', response.data);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

// Task 11: Search by ISBN using Promises
function searchByISBNPromise(isbn) {
    axios.get(${apiUrl}/${isbn})
        .then(response => {
            console.log('Book details by ISBN:', response.data);
        })
        .catch(error => {
            console.error('Error searching by ISBN:', error);
        });
}

// Task 12: Search by Author
function searchByAuthorPromise(author) {
    axios.get(${apiUrl}?author=${author})
        .then(response => {
            console.log('Books by author:', response.data);
        })
        .catch(error => {
            console.error('Error searching by author:', error);
        });
}

// Task 13: Search by Title
function searchByTitlePromise(title) {
    axios.get(${apiUrl}?title=${title})
        .then(response => {
            console.log('Books by title:', response.data);
        })
        .catch(error => {
            console.error('Error searching by title:', error);
        });
}

// Example usage
(async () => {
    // Example of Task 1 - Get book list
    const books = await getBookList();
    console.log('Available books:', books);

    // Example of Task 2 - Get book by ISBN
    const bookByISBN = await getBookByISBN('978-3-16-148410-0');
    console.log('Book by ISBN:', bookByISBN);

    // Example of Task 3 - Get books by author
    const booksByAuthor = await getBooksByAuthor('J.K. Rowling');
    console.log('Books by author:', booksByAuthor);

    // Example of Task 4 - Get books by title
    const booksByTitle = await getBooksByTitle('Harry Potter');
    console.log('Books by title:', booksByTitle);

    // Example of Task 5 - Get book review
    const review = await getBookReview('978-3-16-148410-0');
    console.log('Book review:', review);

    // Example of Task 6 - Register new user
    const user = { username: 'john_doe', password: 'password123' };
    const newUser = await registerNewUser(user);
    console.log('New user registered:', newUser);

    // Example of Task 7 - Login as registered user
    const loginResponse = await loginUser('john_doe', 'password123');
    console.log('Login response:', loginResponse);

    // Example of Task 8 - Add or modify review
    const modifiedReview = await addOrModifyReview('978-3-16-148410-0', 1, 'Amazing book!');
    console.log('Modified review:', modifiedReview);

    // Example of Task 9 - Delete book review
    const deleteReviewResponse = await deleteBookReview('978-3-16-148410-0', 1);
    console.log('Delete review response:', deleteReviewResponse);

    // Example of Task 10 - Get all books using async callback function
    getBooksAsyncCallback();

    // Example of Task 11 - Search by ISBN using Promises
    searchByISBNPromise('978-3-16-148410-0');

    // Example of Task 12 - Search by author using Promises
    searchByAuthorPromise('J.K. Rowling');

    // Example of Task 13 - Search by title using Promises
    searchByTitlePromise('Harry Potter');
})();
