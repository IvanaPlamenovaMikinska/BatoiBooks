function getBookById(books, bookId) {
    return books.find(bookId);
}

function getBookIndexById(books, bookId) {
    return books.findIndex(bookId);
}

export {}