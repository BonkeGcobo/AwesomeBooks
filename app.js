let books = [];

function getInput() {
  const book = {};
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  return book;
}

function removeBook(title) {
  const book = document.getElementById(title);
  book.remove();
  library = library.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('library', JSON.stringify(library));
}

function addBook(bookObj) {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('LI');
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `<p> ${bookObj.title} </p> <p>${bookObj.author} </p>`;
  const removebtn = document.createElement('button');
  removebtn.innerHTML = 'Remove';
  removebtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(removebtn);
  bookList.appendChild(book);
}

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
  const book = getInput();
  library.push(book);
  localStorage.setItem('library', JSON.stringify(library));
  addBook(book);
});

window.onload = () => {
  library = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library === null) {
    library = [];
    return;
  }

  library.forEach((book) => {
    addBook(book);
  });
};