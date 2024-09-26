function getBookById(books, bookId) {
    const book = books.find((libro) => bookId === libro.id);
    if(book) {
        return book;
    }
    throw "No se ha encontrado ningun libro por el id";

}

function getBookIndexById(books, bookId) {
    const book = books.findIndex(libro => bookId === libro.id);
    if(book) {
        return book;
    }
    throw "No se ha encontrado ningun libro por el index";
}


export {
    getBookById,
    getBookIndexById,
}