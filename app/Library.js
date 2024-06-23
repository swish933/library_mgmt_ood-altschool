export default class Library {
	books;
	members;

	constructor(books = [], members = []) {
		this.books = books;
		this.members = members;
	}

	registerMember(user) {
		this.members.push(user);
	}
	addNewBook(book) {
		this.books.push(book);
	}
	borrowBook(user, isbn) {
		//allow user borrow a book only if they've borrwed less than 3 books
		if (user.borrowedBooks.length >= 3) {
			console.log("Sorry, you cannot borrow a book more than 3 books");
			return false;
		}

		const book = this.books.find((book) => book.isbn === isbn);

		//if books is found and not borrowed, allow user to borrow
		if (book && !book.isBorrowed()) {
			user.borrowedBooks.push(book);
			book.borrowed = true;
			console.log(`Please return ${book.title} in 3weeks.`);
			return true;
		}

		console.log(`Book: ${book.title} does not exist or is borrowed`);
		return false;
	}
}
