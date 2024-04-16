let books = [
  { id: 1, title: 'Book One', publishingYear: 2021, authorId: 1 },
  { id: 2, title: 'Book Two', publishingYear: 2022, authorId: 2 }
];

exports.listBooks = (req, res) => {
  res.render('books', { books });
};

exports.addBook = (req, res) => {
  const { title, publishingYear, authorId } = req.body;
  const newBook = {
      id: books.length + 1,  
      title,
      publishingYear,
      authorId
  };
  books.push(newBook);
  res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  books = books.filter(book => book.id !== parseInt(id));
  res.redirect('/book/list');
};