const books = [{ id: 1, title: 'book', publishingYear: 9999, authorId: 1 }];
exports.listBooks = (req, res) => {
  res.render('books', { books });
};