function getBookById(books, bookId) {
    const book = books.find(libro => bookId === libro.id);
    if (book) {
        return book;
    }
    throw "No se ha encontrado ningun libro por el id";

}

function getBookIndexById(books, bookId) {
    const book = books.findIndex(libro => bookId === libro.id);
    if (book !== -1) {
        return book;
    }
    throw "No se ha encontrado ningun libro por el index";
}

function bookExists(books, userId, moduleCode) {
    return books.some(libro => 
        userId === libro.userId && 
    moduleCode === libro.moduleCode);
}

function booksFromUser(books, userId) {
    return books.filter(libro => libro.userId === userId);
}

function booksFromModule(books, moduleCode) {
    return books.filter(libro => libro.moduleCode === moduleCode);
}

function booksCheeperThan(books, price) {
    return books.filter(libro => libro.price <= price);
}

function booksWithStatus(books, status) {
    return books.filter(libro => libro.status === status);
}


function averagePriceOfBooks(books) {
    if (books.length === 0) return '0.00 €';

    const total = books.reduce((acc, book) => acc + book.price, 0);
    const average = total / books.length;
    return `${average.toFixed(2)} €`;
}

function booksOfTypeNotes(books) {
    return books.filter(libro => libro.publisher !== 'Apunts');
}

function booksNotSold(books) {
    return books.filter(libro => libro.soldDate === "");
}

function incrementPriceOfbooks(books, percentage) {
    return books.map(libro => {
        libro.price = libro.price + (libro.price * percentage);
        return libro;
    });
}

function getUserById(users, userId) {
    const user = users.find(usuario => userId === usuario.id);
    if(user) {
        return user;
    }
    throw "No se ha encontrado ningun usuario con este Id";
}

function getUserIndexById(users, userId) {
    const index = users.findIndex(usuario => userId === usuario.id);
    if(index !== -1) {
        return index;
    }
    throw "No se ha encontrado ningun usuario por ete index";
}

function getUserByNickName(users, nick) {
    const user = users.find(usuario => nick === usuario.nick);
    if(user) {
        return user;
    }
    throw "No se ha encontrado ningun usuario con este nick";
}

function getModuleByCode(modules, moduleCode) {
    const module = modules.find(modulo => moduleCode === modulo.code);
    if(module) {
        return module;
    }
    throw "No se ha encontrado ningun modulo con este codigo";
}

export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNotes,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode
}