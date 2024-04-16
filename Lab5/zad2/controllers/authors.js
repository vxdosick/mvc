const authors = [{ id: 1, name: 'author' }];
exports.listAuthors = (req, res) => {
  res.render('authors', { authors });
};