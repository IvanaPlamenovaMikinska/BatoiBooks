import Modules from "../model/modules.class.js";
import Users from "../model/users.class.js";
import Books from "../model/books.class.js";
import View from "../view/view.class.js";


export default class Controller {
    constructor() {
        this.model = {
            modules: new Modules(),
            users: new Users(),
            books: new Books()
        }
        this.view = new View()
    }
    async init() {
        await this.model.modules.populate()
        await this.model.users.populate()
        await this.model.books.populate()
        this.view.renderModulesOption(this.model.modules.data)
        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this))
        this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this))
        this.view.renderBooks(this.model.books.data)

    }

    async handleSubmitBook(payload) {
        try {
            const book = await this.model.books.addBook(payload)
            this.view.renderBook(book)
            this.view.renderMessage("info", "Libro añadido con exito")
        } catch(error) {
            this.renderMessage("error", `Error, No se ha podido añadir el libro: ${error}`)
        }
        
    }

    handleRemoveBook(bookId) {
        this.model.books.removeBook(bookId)
        this.view.removeBook(bookId)
    }
}