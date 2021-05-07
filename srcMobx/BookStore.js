import {types, destroy} from 'mobx-state-tree';

const Book = types
  .model('Book', {
    title: types.string,
    author: types.string,
    read: false,
  })
  .actions(self => ({
    toggleRead() {
      self.read = !self.read;
    },
  }));

const BookStore = types
  .model({
    books: types.array(Book),
  })
  .views(self => ({
    get readBooks() {
      return self.books.filter(book => book.read);
    },
    AddBookPLus(value) {
      return value + ' Nhân';
    },
    BookCount() {
      return self.books.filter(book => book.read).length;
    },
    booksByAuthor(author) {
      return self.books.filter(book => book.author === author);
    },
  }))
  .actions(self => ({
    addBook(book) {
      self.books.push({
        author: book.author,
        read: false,
        title: self.AddBookPLus(book.title),
      });
    },
    remove(book) {
      console.log('🚀 ~ remove ~ book', book);
      destroy(book);
    },
  }))
  .create({
    books: [
      {
        title: 'ádasdas',
        author: 'ádasd',
        read: true,
      },
    ],
  });

export default BookStore;
