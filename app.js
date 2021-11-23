let library = [];

function getInput() {
  const books = {};
  books.title = document.getElementById('title').value;
  books.author = document.getElementById('author').value;
  return books;
}

function addBook(bookObj) {
  const bookList = document.getElementById('listBook');
  const books = document.createElement('li');
  books.setAttribute('id', bookObj.title);
  books.innerHTML = 
  `<p> ${bookObj.title} </p>
  <p>${bookObj.author} </p>`;
  const removebtn = document.createElement('button');
  removebtn.innerHTML = 'Remove';
  removebtn.addEventListener('click', () => removeBook(bookObj.title));
  books.appendChild(removebtn);
  bookList.appendChild(books);
}

function removeBook(title) {
  const books = document.getElementById(title);
  books.remove();
  library = library.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('library', JSON.stringify(library));
};
const addButton = document.querySelector('.addbook');
addButton.addEventListener('click', () => {
  const books = getInput();
  library.push(books);
  localStorage.setItem('library', JSON.stringify(library));
  addBook(books);
});

window.onload = () => {
  library = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library === null) {
    library = [];
    return;
  }

  library.forEach((books) => {
    addBook(books);
  });
};
