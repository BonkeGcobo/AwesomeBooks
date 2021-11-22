window.onload = () => {
  bookSec=document.querySelector('.Books');
  remove=document.querySelector('.remove');
  const books = [];

  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  /* let form =  document.querySelector('.form')

  const storageName = 'inputFormDetails';

  const currentStorage = JSON.parse(window.localStorage.getItem(storageName));

  if (currentStorage) {
    form.title.value = currentStorage.title;
  }

  form.addEventListener('input', () => {
    const newData = {
    title: form.title.value,
    author: form.author.value
  };

  window.localStorage.setItem(storageName, JSON.stringify(newData));
  }); */
  let counter = 0;
  const addBtn = document.querySelector('.add');
  addBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const addBook = new Book(title, author);
    books.push(addBook);
    popBook(counter);
    counter++;
  });

  function popBook(counter){
    const eachBook = `<div class="mybook">
    <p>"${books[counter].title}"</p>
    <p>"${books[counter].author}"</p>
    <button type="button" class = "remove">Remove</button>
    <hr>`;
    bookSec.insertAdjacentHTML('beforeend', eachBook);
    
  }
};
