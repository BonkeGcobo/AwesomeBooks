let library = [];
let counter = 0;
function getInput() {
  const books = {};
  books.id = counter;
  books.title = document.getElementById('title').value;
  books.author = document.getElementById('author').value;
  return books;
}

function removeBook(id) {
  const books = document.getElementById(id);
  books.remove();
  console.log(id);
  library = library.filter((bookObj) => bookObj.id !== id);
  localStorage.setItem('library', JSON.stringify(library));
}

function addBook(bookObj) {
  counter++;
  const bookList = document.getElementById('listBook');
  const books = document.createElement('li');
  books.setAttribute('id', bookObj.id);
  books.innerHTML = `<p> ${bookObj.title} </p>
  <p>${bookObj.author} </p>`;
  const removebtn = document.createElement('button');
  removebtn.innerHTML = 'Remove';
  removebtn.addEventListener('click', () => removeBook(bookObj.id));
  books.appendChild(removebtn);
  bookList.appendChild(books);
}

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
