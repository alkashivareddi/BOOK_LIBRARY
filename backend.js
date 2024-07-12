const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');

let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function render() {
    bookList.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} 
            <button onclick="removeBook(${index})">Remove</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = new Book(title, author);
    myLibrary.push(book);
    render();
    addBookForm.reset(); // Clear the form inputs
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

addBookForm.addEventListener('submit', addBook);

