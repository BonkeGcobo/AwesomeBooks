/* eslint-disable no-undef */

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.querySelector('.addbook');
const bookSec = document.querySelector('.Books');
const showBookList = document.querySelector('.List');
const addBook = document.querySelector('.addNew');
const conItem = document.querySelector('.toContact');
const bookAdd = document.querySelector('.AddingBook');
const BooksList = document.querySelector('.Books-list');
const contactForm = document.querySelector('.contactForm');
const date = document.querySelector('.theDate');

const { DateTime } = luxon;

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

showBookList.addEventListener('click', () => {
  BooksList.style.display = 'block';
  bookAdd.style.display = 'none';
  contactForm.style.display = 'none';
});

addBook.addEventListener('click', () => {
  bookAdd.style.display = 'block';
  BooksList.style.display = 'none';
  contactForm.style.display = 'none';
});

conItem.addEventListener('click', () => {
  contactForm.style.display = 'flex';
  bookAdd.style.display = 'none';
  BooksList.style.display = 'none';
});

const time = DateTime.now();
showTime = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
date.innerHTML = showTime;