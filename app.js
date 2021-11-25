const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.addbook');
const bookSec = document.querySelector('.Books');

class Book {
  constructor(title, author) {
    this.id = `_${Math.random().toString(36).substr(2, 9)}`;
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  add(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.books = JSON.stringify(this.books);
    this.displayBooks();
  }

  remove(bookID) {
    this.books = this.books.filter((book) => book.id !== bookID);
    localStorage.books = JSON.stringify(this.books);
    this.displayBooks();
  }

  displayBooks() {
    bookSec.innerHTML = '';
    this.books.forEach((book) => {
      const eachBook = `<div class="Book">
        <h4 class="aboutBook"> "${book.title}" by ${book.author}</h4>
        <button type="button" data-id="${book.id}" class="removebtn">Remove</button>
      </div>
      <hr class="bookLine">`;

      bookSec.insertAdjacentHTML('beforeend', eachBook);
      document.querySelectorAll('.removebtn').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.remove(btn.dataset.id);
        });
      });
    });
  }
}

const Lib = new Library();
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = title.value;
  const writer = author.value;
  Lib.add(name, writer);
});

if (Lib.books !== null) {
  Lib.displayBooks();
}