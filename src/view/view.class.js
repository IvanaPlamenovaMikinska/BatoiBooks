export default class View {
    constructor() {
        this.bookList = document.getElementById("list");
        this.about = document.getElementById("about");
        this.form = document.getElementById("form");
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

    renderBook(book, callbackRemove, callbackAdd, callbackEdit) {
        const div = document.createElement('div');
        div.id = book.id
        div.classList.add('book-card');
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
        <button class="add">
        <span class="material-icons">add_shopping_cart</span>
        </button>
        <button class="edit">
        <span class="material-icons">edit</span>
        </button>
        <button class="delete">
        <span class="material-icons">delete</span>
        </button>
        `
        this.bookList.appendChild(div)
        div.querySelector(".delete").addEventListener("click", () => callbackRemove(book.id))
        div.querySelector(".add").addEventListener("click", () => callbackAdd(book.id))
        div.querySelector(".edit").addEventListener("click", () => callbackEdit(book.id))

    }

    renderBooks(books, callbackRemove, callbackAdd, callbackEdit) {
        try {
            books.forEach(book => {
                this.renderBook(book, callbackRemove, callbackAdd, callbackEdit)
            })
            this.renderMessage("info", "Libros renderizados con exito")
        } catch (error) {
            this.renderMessage("error", `Error, Los libros no han podido renderizarse: ${error}`)
        }

    }

    changeBook(book, callbackRemove, callbackAdd, callbackEdit) {
        const div = document.getElementById(book.id);
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
        <button class="add">
        <span class="material-icons">add_shopping_cart</span>
        </button>
        <button class="edit">
        <span class="material-icons">edit</span>
        </button>
        <button class="delete">
        <span class="material-icons">delete</span>
        </button>
        `

        div.querySelector(".delete").addEventListener("click", () => callbackRemove(book.id))
        div.querySelector(".add").addEventListener("click", () => callbackAdd(book.id))
        div.querySelector(".edit").addEventListener("click", () => callbackEdit(book.id))
    }

    removeBook(bookId) {
        try {
            const book = document.getElementById(bookId)
            book.remove()
            this.renderMessage("info", `Libro con id: ${bookId} eliminado con exito`)
        } catch (error) {
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
                id: document.getElementById("id").value,
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

    loadBookToForm(book) {
        document.getElementById("form-title").innerText = "Editar Libro";
        document.getElementById("id").value = book.id;
        document.getElementById("id").disabled = true;
        document.getElementById("id-module").value = book.moduleCode;
        document.getElementById("publisher").value = book.publisher;
        document.getElementById("price").value = book.price;
        document.getElementById("pages").value = book.pages;
        document.querySelector(`input[name="status"][value="${book.status}"]`).checked = true;
        document.getElementById("comments").value = book.comments;

        const addButton = document.querySelector("button[type='submit']");
        addButton.innerText = "Cambiar";
    }

    reloadForm() {
        document.getElementById("form-title").innerText = "Añadir Libro"
        const addButton = document.querySelector("button[type='submit']");
        addButton.innerText = "Añadir";
        document.getElementById("bookForm").reset();
    }
}