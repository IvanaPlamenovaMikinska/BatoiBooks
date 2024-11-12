import Modules from "../model/modules.class.js";
import Users from "../model/users.class.js";
import Books from "../model/books.class.js";
import View from "../view/view.class.js";
import Cart from "../model/cart.class.js";


export default class Controller {
    constructor() {
        this.model = {
            modules: new Modules(),
            users: new Users(),
            books: new Books(),
            cart: new Cart()
        }
        this.view = new View()
    }
    async init() {
        await Promise.all([
            this.model.modules.populate(),
            this.model.users.populate(),
            this.model.books.populate(),
            this.model.cart.populate()
        ]);

        this.view.renderModulesOption(this.model.modules.data)
        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this))
        this.view.renderBooks(this.model.books.data, this.handleRemoveBook.bind(this), this.handleAddBookToCart.bind(this), this.handleEditBook.bind(this))

    }

    async handleSubmitBook(payload) {
        try {
            if (!payload.id) {
                const book = await this.model.books.addBook(payload)
                this.view.renderBook(book, this.handleRemoveBook.bind(this), this.handleAddBookToCart.bind(this), this.handleEditBook.bind(this))
                this.view.renderMessage("info", "Libro añadido con exito")
            } else {
                const book = await this.model.books.changeBook(payload)
                this.view.changeBook(book, this.handleRemoveBook.bind(this), this.handleAddBookToCart.bind(this), this.handleEditBook.bind(this))
                this.view.renderMessage("info", `Libro con id: ${payload.id} cambiado con exito`)
                this.view.reloadForm();
            }
        } catch (error) {
            this.view.renderMessage("error", `Error, No se ha podido añadir el libro: ${error}`)
        }

    }

    async handleRemoveBook(bookId) {
        try {
            const confirmed = confirm("¿Estás seguro de que deseas eliminar este libro?");
            if (confirmed) {
                await this.model.books.removeBook(bookId)
                this.view.removeBook(bookId)
            } else {
                this.view.renderMessage("info", `Eliminación cancelada para el libro con id: ${bookId}`);
            }
        } catch (error) {
            this.view.renderMessage("error", `Error, No se ha podido eliminar el libro: ${error}`)
        }

    }

    async handleAddBookToCart(bookId) {
        try {
            const libro = this.model.books.getBookById(bookId)
            const book = await this.model.cart.addItem(libro)
            this.view.renderMessage("info", `Libro con id: ${bookId} añadido al carrito con exito`)
            return book;
        } catch (error) {
            this.view.renderMessage("error", `Error, No se ha podido añadir el libro al carrito: ${error}`)
        }
    }

    async handleEditBook(bookId) {
        try {
            const book = await this.model.books.getBookById(bookId);
            this.view.loadBookToForm(book);
            this.view.renderMessage("info", `Editando libro con id: ${bookId}`)
        } catch (error) {
            this.view.renderMessage("error", `Error, No se ha podido cargar el librocon id: ${error} para editar`);
        }
    }
}