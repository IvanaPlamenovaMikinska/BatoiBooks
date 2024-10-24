export default class View {
    constructor() {
        this.bookList = document.getElementById("list");
        this.about = document.getElementById("about");
        this.form = document.getElementById("form");
        this.remove = document.getElementById("remove");
        this.bookForm = document.getElementById("bookForm");
        this.messages = document.getElementById("messages");
    }

    renderModulesOption(modules) {
        modules.forEach(module => {
            const option = document.createElement("option");
            option.innerHTML = module.cliteral;

            const select = document.getElementById("id-module");
            select.appendChild(option);
        });
    }

    renderBook(book) {
        const div = document.createElement('div');
        div.id = book.id
        div.innerHTML = `
        <div>
        <br><h2>Id: ${book.id}</h2>
        <h4>Módulo: ${book.moduleCode}</h4>
        <p>Editorial: ${book.publisher}</p>
        <p>Precio: ${book.price}€</p>
        <p>Páginas: ${book.pages}</p>
        <p>Estado: ${book.status}</p>
        <p>${book.soldDate ? "Vendido el " + book.soldDate : "En venta"}</p>
        <p>Comentarios: ${book.comments}</p>
        </div>
        `
        this.bookList.appendChild(div)
    }

    renderBooks(books) {
        try {
            books.forEach(book => {
                this.renderBook(book)
            })
            this.renderMessage("info", "Libros renderizados con exito")
        } catch(error) {
            this.renderMessage("error", `Error, Los libros no han podido renderizarse: ${error}`)
        }

    }

    removeBook(bookId) {
        try {
            const book = document.getElementById(bookId)
            book.remove()
            this.renderMessage("info", "Libro eliminado con exito")
        } catch(error) {
            this.renderMessage("error", `Error, El libro no ha podido eliminarse: ${error}`)
        }
        
    }

    renderMessage(tipo, message) {
        const div = document.createElement('div');
        div.className = tipo + " alert alert-danger alert-dismissible"
        div.setAttribute("role", "alert");
        div.innerHTML = `${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
        `;

        const messages = document.getElementById('messages');
        if (messages) {
            messages.appendChild(div);
        }

        if (tipo !== 'error') {
            setTimeout(() => {
                div.remove();
            }, 3000);
        }
    }

    setBookSubmitHandler(callback) {
        this.bookForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const payload = {
                moduleCode: document.getElementById("id-module").value,
                publisher: document.getElementById("publisher").value,
                price: document.getElementById("price").value,
                pages: document.getElementById("pages").value,
                status: document.querySelector('input[name="status"]:checked')?.value || "No seleccionado",
                comments: document.getElementById("comments").value
            }
            // a continuación recoge los datos del formulario y los guarda en un objeto // por último llama a la función recibida pasándole dicho objeto
            callback(payload)
        })
    }

    setBookRemoveHandler(callback) {
        this.remove.addEventListener('click', () => {
            const idToRemove = document.getElementById("id-remove").value
            // recoge la id del libro a borrar y la pasa a la fn
            callback(idToRemove)
        })
    }
}