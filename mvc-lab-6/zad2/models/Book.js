class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id
        this.title = title
        this.author = author
        this.year = year
        this.available = available
    }
    static getAll() {
        return [
            new Book(1, "Book1", "Author1", 2020),
            new Book(2, "Book2", "Author2", 2021),
        ]
    }
}
module.exports = Book

