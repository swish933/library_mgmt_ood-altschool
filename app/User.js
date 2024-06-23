export default class User {
	id;
	name;
	borrowedBooks;

	constructor(id, name, borrowedBooks = []) {
		this.id = id;
		this.name = name;
		this.borrowedBooks = borrowedBooks;
	}

	peakBook(lib, isbn) {
		return lib.books.find((book) => book.isbn === isbn);
	}

	returnBook(isbn) {
		const borrowedBook = this.borrowedBooks.find((book) => book.isbn === isbn);
		if (borrowedBook) {
			this.borrowedBooks = this.borrowedBooks.filter(
				(book) => book.isbn !== isbn
			);

			borrowedBook.borrowed = false;

			console.log(`Thanks for returning the book. ${borrowedBook.title}`);
		}
	}
}
