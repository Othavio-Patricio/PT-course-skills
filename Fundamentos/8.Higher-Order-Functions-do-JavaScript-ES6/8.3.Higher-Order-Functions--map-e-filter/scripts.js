const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}
console.log('Exercise 1', formatedBookNames());


function nameAndAge() {
  const newBooks = books.sort((a, b) => (a.releaseYear - a.author.birthYear) > (b.releaseYear - b.author.birthYear) ? 1 : -1);
  return newBooks.map((book) => {
    return {
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  }});
}
console.log('Exercise 2', nameAndAge());

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}
console.log('Exercise 3', fantasyOrScienceFiction());

function oldBooksOrdered() {
  const newBooks = books.sort((a, b) => a.releaseYear > b.releaseYear ? 1 : -1);
  return newBooks.filter((book) => 2022 - book.releaseYear > 60);
}
console.log('Exercise 4', oldBooksOrdered())

function fantasyOrScienceFictionAuthors() {
  const newBooks = fantasyOrScienceFiction();
  return newBooks.map((book) => book.author.name);
}
console.log('Exercise 5', fantasyOrScienceFictionAuthors());

function oldBooks() {
  const newBooks = oldBooksOrdered();
  return newBooks.map((book) => book.name);
}
console.log('Exercise 6', oldBooks());

function authorWith3DotsOnName() {
  const newBook = books.find((book) => book.author.name.split('.').length === 4);
  return newBook.name;
}
console.log('Exercise 7', authorWith3DotsOnName());