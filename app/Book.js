export default class Book {
	id;
	isbn;
	title;
	author;
	borrowed;

	constructor(id, title, author, isbn, borrowed = false) {
		this.id = id;
		this.title = title;
		this.isbn = isbn;
		this.author = author;
		this.borrowed = borrowed;
	}

	isBorrowed() {
		return this.borrowed;
	}
}
