import Book from './book.class'
export default class Books {
    constructor() {
        this.data = []
    }

    populate(libros) {
        libros.forEach(libro => {
            this.data.push(new Book(libro))
        });
    }

    addBook(libro) {
        let book = new Book(libro)
        let max = 0
        this.data.forEach(libro => {
            if(libro.id > max) {
                max = libro.id
            }
        });
        book.id = max + 1
        this.data.push(book)
        return book
    }

    removeBook(id) {
        let cont = 0
        let encontrado = false
        this.data.forEach(libro => {
            if(libro.id === id) {
                this.data.splice(cont, 1)
                encontrado = true
            }
            cont++
        });
    if(!encontrado) 
        throw "El libro con este id no existe"
    }
    
    changeBook(libro) {
        const book = this.data.find(book => book.id === libro.id)
        if(book) {
            Object.assign(book, libro)
            return book
        } else {
            throw "El libro no se ha encontrado"
        }
    }

    toString() {
        let cadena = 'Libros: '
        this.data.forEach(libro => {
            cadena = cadena + libro.toString()
        });
        return cadena
    }

    getBookById(bookId) {
        const book = this.data.find(libro => bookId === libro.id);
        if (book) {
            return book;
        }
        throw "No se ha encontrado ningun libro por el id";
    
    }

    getBookIndexById(bookId) {
        const book = this.data.findIndex(libro => bookId === libro.id);
        if (book !== -1) {
            return book;
        }
        throw "No se ha encontrado ningun libro por el index";
    }

    bookExists(userId, moduleCode) {
        return this.data.some(libro => 
            userId === libro.userId && 
        moduleCode === libro.moduleCode);
    }

    booksFromUser(userId) {
        return this.data.filter(libro => libro.userId === userId);
    }

    booksFromModule(moduleCode) {
        return this.data.filter(libro => libro.moduleCode === moduleCode);
    }

    booksCheeperThan(price) {
        return this.data.filter(libro => libro.price <= price);
    }
    
    booksWithStatus(status) {
        return this.data.filter(libro => libro.status === status);
    }
    
    averagePriceOfBooks() {
        if (this.data.length === 0) return '0.00 €';
    
        const total = this.data.reduce((acc, book) => acc + book.price, 0);
        const average = total / this.data.length;
        return `${average.toFixed(2)} €`;
    }
    
    booksOfTypeNotes() {
        return this.data.filter(libro => libro.publisher == 'Apunts');
    }
    
    booksNotSold() {
        return this.data.filter(libro => libro.soldDate === "");
    }
    
    incrementPriceOfbooks(percentage) {
        return this.data.map(libro => {
            libro.price = libro.price + (libro.price * percentage);
            return libro;
        });
    }

}