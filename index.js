import Library from "./app/Library.js";
import User from "./app/User.js";
import Book from "./app/Book.js";

const library = new Library();

const book1 = new Book("1", "Everybody Always", "Bob Goff", "9826781211291");
const book2 = new Book("2", "Harry Potter", "J.K. Rowling", "9261728818829");
const book3 = new Book(
	"3",
	"The Tipping Point",
	"Malcolm Gladwell",
	"8278197256789"
);
const book4 = new Book(
	"4",
	"The Age of Surveillance Capitalism",
	"Shoshana Zuboff",
	"763578208750"
);
const book5 = new Book(
	"5",
	"The Immortal Life of Henrietta Lacks",
	"Rebecca Skloot",
	"9287627819910"
);

const user1 = new User("1", "Haruna");
const user2 = new User("2", "Deji");

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);
library.addNewBook(book4);
library.addNewBook(book5);

console.log(library.books);

library.registerMember(user1);
library.registerMember(user2);

console.log(user1.peakBook(library, "9287627819910"));

library.borrowBook(user1, "9287627819910");
library.borrowBook(user1, "763578208750");
console.log(
	`${user1.name}'s borrowed books: ${JSON.stringify(user1.borrowedBooks)}`
);

library.borrowBook(user2, "763578208750");
user1.returnBook("763578208750");

console.log(
	`${user1.name}'s borrowed books: ${JSON.stringify(user1.borrowedBooks)}`
);

library.borrowBook(user2, "763578208750");
