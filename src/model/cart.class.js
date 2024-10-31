import { addDBBook } from '../services/books.api';
import Book from './book.class'
export default class Cart {
    constructor() {
        this.data = []
    }

    async populate() {

    }

    getBookById(bookId) {
        const book = this.data.find(libro => bookId === libro.id);
        if (book) {
            return book;
        }
        throw "No se ha encontrado ningun libro por el id";

    }

    async addItem(libro) {
        const existe = this.data.some(item => item.id === libro.id);
        if (!existe) {
            let nuevoLibro = { ...libro };
            let book = new Book(nuevoLibro);
            this.data.push(book);
            console.log(this.data)
            return book;
        }
        throw "El libro ya existe";
    }


    async removeItem(id) {
        const libro = await removeDBBook(id)
        let cont = 0
        let encontrado = false
        this.data.forEach(libro => {
            if (libro.id === id) {
                this.data.splice(cont, 1)
                encontrado = true
            }
            cont++
        });
        if (!libro)
            throw "El libro con este id no existe"
    }

}