(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const y="/logoBatoi.png";class v{constructor(e,t,o,s){this.code=e,this.cliteral=t,this.vliteral=o,this.courseId=s}toString(){return this.code+", "+this.cliteral+", "+this.vliteral+", "+this.courseId}}const B="http://ivanaplamenova.projecte1.es:5050/modules/";async function E(){const i=await fetch(B);if(!i.ok)throw`Error ${i.status} de la BBDD: ${i.statusText}`;return await i.json()}class w{constructor(){this.data=[]}async populate(){const e=await E();this.data=e.map(t=>new v(t.code,t.cliteral,t.vliteral,t.courseId))}toString(){let e="Modulos: ";return this.data.forEach(t=>{e=e+t.toString()}),e}getModuleByCode(e){const t=this.data.find(o=>e===o.code);if(t)return t;throw"No se ha encontrado ningun modulo con este codigo"}}class b{constructor(e,t,o,s){this.id=e,this.nick=t,this.email=o,this.password=s}toString(){return this.id+", "+this.nick+", "+this.email+", "+this.password}}const a="http://ivanaplamenova.projecte1.es:5050/users/";async function k(){const i=await fetch(a);if(!i.ok)throw`Error ${i.status} de la BBDD: ${i.statusText}`;return await i.json()}async function $(i){const e=await fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}async function I(i){const e=await fetch(a+i,{method:"DELETE"});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}async function T(i){const e=await fetch(a+i.id,{method:"PUT",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}async function x(i,e){const t=await fetch(a+i,{method:"PATCH",body:JSON.stringify({password:e}),headers:{"Content-Type":"application/json"}});if(!t.ok)throw`Error ${t.status} de la BBDD: ${t.statusText}`;return await t.json()}class S{constructor(){this.data=[]}async populate(){(await k()).forEach(t=>{this.data.push(new b(t.id,t.nick,t.email,t.password))})}async addUser(e){const t=await $(e);let o=new b(t.id,t.nick,t.email,t.password);return this.data.push(o),o}async removeUser(e){await I(e);let t=0,o=!1;if(this.data.forEach(s=>{s.id===e&&(this.data.splice(t,1),o=!0),t++}),!o)throw"El user con este id no existe"}async changeUser(e){await T(e);const t=this.data.find(o=>o.id===e.id);if(t)return Object.assign(t,e),t;throw"El user no se ha encontrado"}async changeUserPassword(e,t){await x(e,t);const o=this.data.find(s=>s.id===e);if(o)return o.password=t,o;throw"El user no se ha encontrado"}toString(){let e="Users: ";return this.data.forEach(t=>{e=e+t.toString()}),e}getUserById(e){const t=this.data.find(o=>e===o.id);if(t)return t;throw"No se ha encontrado ningun usuario con este Id"}getUserIndexById(e){const t=this.data.findIndex(o=>e===o.id);if(t!==-1)return t;throw"No se ha encontrado ningun usuario por ete index"}getUserByNickName(e){const t=this.data.find(o=>e===o.nick);if(t)return t;throw"No se ha encontrado ningun usuario con este nick"}}class c{constructor(e){this.id=e.id,this.userId=e.userId,this.moduleCode=e.moduleCode,this.publisher=e.publisher,this.price=e.price,this.pages=e.pages,this.status=e.status,this.photo=e.photo||"",this.comments=e.comments||"",this.soldDate=e.soldDate||""}toString(){return this.id+", "+this.userId+", "+this.moduleCode+", "+this.publisher+", "+this.price+", "+this.pages+", "+this.status+", "+this.photo+", "+this.comments+", "+this.soldDate}}const d="http://ivanaplamenova.projecte1.es:5050/books/";async function L(){const i=await fetch(d);if(!i.ok)throw`Error ${i.status} de la BBDD: ${i.statusText}`;return await i.json()}async function D(i){const e=await fetch(d,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}async function M(i){const e=await fetch(d+i,{method:"DELETE"});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}async function C(i){const e=await fetch(d+i.id,{method:"PUT",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}const N="Apunts";class j{constructor(){this.data=[]}async populate(){(await L()).forEach(t=>{this.data.push(new c(t))})}async addBook(e){const t=await D(e);let o=new c(t);return this.data.push(o),o}async removeBook(e){const t=await M(e);let o=0;if(this.data.forEach(s=>{s.id===e&&this.data.splice(o,1),o++}),!t)throw"El libro con este id no existe"}async changeBook(e){await C(e);const t=this.data.find(o=>o.id===e.id);if(t)return Object.assign(t,e),t;throw"El libro no se ha encontrado"}toString(){let e="Libros: ";return this.data.forEach(t=>{e=e+t.toString()}),e}getBookById(e){const t=this.data.find(o=>e===o.id);if(t)return t;throw"No se ha encontrado ningun libro por el id"}getBookIndexById(e){const t=this.data.findIndex(o=>e===o.id);if(t!==-1)return t;throw"No se ha encontrado ningun libro por el index"}bookExists(e,t){return this.data.some(o=>e===o.userId&&t===o.moduleCode)}booksFromUser(e){return this.data.filter(t=>t.userId===e)}booksFromModule(e){return this.data.filter(t=>t.moduleCode===e)}booksCheeperThan(e){return this.data.filter(t=>t.price<=e)}booksWithStatus(e){return this.data.filter(t=>t.status===e)}averagePriceOfBooks(){return this.data.length===0?"0.00 €":`${(this.data.reduce((o,s)=>o+s.price,0)/this.data.length).toFixed(2)} €`}booksOfTypeNotes(){return this.data.filter(e=>e.publisher==N)}booksNotSold(){return this.data.filter(e=>e.soldDate==="")}incrementPriceOfbooks(e){return this.data.map(t=>(t.price=t.price+t.price*e,t))}}class q{constructor(){this.bookList=document.getElementById("list"),this.about=document.getElementById("about"),this.form=document.getElementById("form"),this.bookForm=document.getElementById("bookForm"),this.messages=document.getElementById("messages")}renderModulesOption(e){e.forEach(t=>{const o=document.createElement("option");o.innerHTML=t.cliteral,document.getElementById("id-module").appendChild(o)})}renderBook(e,t,o,s){const r=document.createElement("div");r.id=e.id,r.classList.add("book-card"),r.innerHTML=`
        <div>
        <br><h2>Id: ${e.id}</h2>
        <h4>Módulo: ${e.moduleCode}</h4>
        <p>Editorial: ${e.publisher}</p>
        <p>Precio: ${e.price}€</p>
        <p>Páginas: ${e.pages}</p>
        <p>Estado: ${e.status}</p>
        <p>${e.soldDate?"Vendido el "+e.soldDate:"En venta"}</p>
        <p>Comentarios: ${e.comments}</p>
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
        `,this.bookList.appendChild(r),r.querySelector(".delete").addEventListener("click",()=>t(e.id)),r.querySelector(".add").addEventListener("click",()=>o(e.id)),r.querySelector(".edit").addEventListener("click",()=>s(e.id))}renderBooks(e,t,o,s){try{e.forEach(r=>{this.renderBook(r,t,o,s)}),this.renderMessage("info","Libros renderizados con exito")}catch(r){this.renderMessage("error",`Error, Los libros no han podido renderizarse: ${r}`)}}changeBook(e,t,o,s){const r=document.getElementById(e.id);r.innerHTML=`
        <div>
        <br><h2>Id: ${e.id}</h2>
        <h4>Módulo: ${e.moduleCode}</h4>
        <p>Editorial: ${e.publisher}</p>
        <p>Precio: ${e.price}€</p>
        <p>Páginas: ${e.pages}</p>
        <p>Estado: ${e.status}</p>
        <p>${e.soldDate?"Vendido el "+e.soldDate:"En venta"}</p>
        <p>Comentarios: ${e.comments}</p>
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
        `,r.querySelector(".delete").addEventListener("click",()=>t(e.id)),r.querySelector(".add").addEventListener("click",()=>o(e.id)),r.querySelector(".edit").addEventListener("click",()=>s(e.id))}removeBook(e){try{document.getElementById(e).remove(),this.renderMessage("info",`Libro con id: ${e} eliminado con exito`)}catch(t){this.renderMessage("error",`Error, El libro no ha podido eliminarse: ${t}`)}}renderMessage(e,t){const o=document.createElement("div");o.className=e+" alert alert-danger alert-dismissible",o.setAttribute("role","alert"),o.innerHTML=`${t}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
        `;const s=document.getElementById("messages");s&&s.appendChild(o),e!=="error"&&setTimeout(()=>{o.remove()},3e3)}setBookSubmitHandler(e){this.bookForm.addEventListener("submit",t=>{var o;if(t.preventDefault(),this.bookForm.checkValidity()){const s={id:document.getElementById("id").value,moduleCode:document.getElementById("id-module").value,publisher:document.getElementById("publisher").value,price:document.getElementById("price").value,pages:document.getElementById("pages").value,status:((o=document.querySelector('input[name="status"]:checked'))==null?void 0:o.value)||"No seleccionado",comments:document.getElementById("comments").value};e(s)}else{const s=document.getElementById("id-module"),r=document.getElementById("publisher"),n=document.getElementById("price"),l=document.getElementById("pages"),g=document.querySelector('input[name="status"]:checked');let u=s.nextElementSibling,h=r.nextElementSibling,m=n.nextElementSibling,p=l.nextElementSibling,f=document.querySelector('input[name="status"]').closest("div").querySelector(".error");s.checkValidity()?u.innerHTML="":u.innerHTML=s.validationMessage,r.checkValidity()?h.innerText="":h.innerText=r.validationMessage,n.checkValidity()?m.innerText="":m.innerText=n.validationMessage,l.checkValidity()?p.innerHTML="":p.innerText=l.validationMessage,g?f.innerHTML="":f.innerHTML="Selecciona el estado."}})}loadBookToForm(e){document.getElementById("form-title").innerText="Editar Libro",document.getElementById("id").value=e.id,document.getElementById("id").disabled=!0,document.getElementById("id-module").value=e.moduleCode,document.getElementById("publisher").value=e.publisher,document.getElementById("price").value=e.price,document.getElementById("pages").value=e.pages,document.querySelector(`input[name="status"][value="${e.status}"]`).checked=!0,document.getElementById("comments").value=e.comments;const t=document.querySelector("button[type='submit']");t.innerText="Cambiar"}reloadForm(){document.getElementById("form-title").innerText="Añadir Libro";const e=document.querySelector("button[type='submit']");e.innerText="Añadir",document.getElementById("bookForm").reset()}}class O{constructor(){this.data=[]}async populate(){}getBookById(e){const t=this.data.find(o=>e===o.id);if(t)return t;throw"No se ha encontrado ningun libro por el id"}async addItem(e){if(!this.data.some(o=>o.id===e.id)){let o={...e},s=new c(o);return this.data.push(s),console.log(this.data),s}throw"El libro ya existe"}async removeItem(e){const t=await removeDBBook(e);let o=0;if(this.data.forEach(s=>{s.id===e&&this.data.splice(o,1),o++}),!t)throw"El libro con este id no existe"}}class P{constructor(){this.model={modules:new w,users:new S,books:new j,cart:new O},this.view=new q}async init(){await Promise.all([this.model.modules.populate(),this.model.users.populate(),this.model.books.populate(),this.model.cart.populate()]),this.view.renderModulesOption(this.model.modules.data),this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this)),this.view.renderBooks(this.model.books.data,this.handleRemoveBook.bind(this),this.handleAddBookToCart.bind(this),this.handleEditBook.bind(this))}async handleSubmitBook(e){try{if(e.id){const t=await this.model.books.changeBook(e);this.view.changeBook(t,this.handleRemoveBook.bind(this),this.handleAddBookToCart.bind(this),this.handleEditBook.bind(this)),this.view.renderMessage("info",`Libro con id: ${e.id} cambiado con exito`),this.view.reloadForm()}else{const t=await this.model.books.addBook(e);this.view.renderBook(t,this.handleRemoveBook.bind(this),this.handleAddBookToCart.bind(this),this.handleEditBook.bind(this)),this.view.renderMessage("info","Libro añadido con exito")}}catch(t){this.view.renderMessage("error",`Error, No se ha podido añadir el libro: ${t}`)}}async handleRemoveBook(e){try{await this.model.books.removeBook(e),this.view.removeBook(e)}catch(t){this.view.renderMessage("error",`Error, No se ha podido eliminar el libro: ${t}`)}}async handleAddBookToCart(e){try{const t=this.model.books.getBookById(e),o=await this.model.cart.addItem(t);return this.view.renderMessage("info",`Libro con id: ${e} añadido al carrito con exito`),o}catch(t){this.view.renderMessage("error",`Error, No se ha podido añadir el libro al carrito: ${t}`)}}async handleEditBook(e){try{const t=await this.model.books.getBookById(e);this.view.loadBookToForm(t),this.view.renderMessage("info",`Editando libro con id: ${e}`)}catch(t){this.view.renderMessage("error",`Error, No se ha podido cargar el librocon id: ${t} para editar`)}}}document.querySelector("#app").innerHTML=`
<header>
<img src="${y}" alt="Batoi Logo" />
<h1>BatoiBooks</h1>
</header>
<nav>
  <ul>
    <li><a href="#list">Ver Libros</a></li>
    <li><a href="#form">Añadir Libro</a></li>
    <li><a href="#about">Acerca de...</a></li>
  </ul>
</nav>
<div id="list" class="books-container"></div>
<div id="form"><br>
<h2 id="form-title">Añadir Libro</h2>
<b><div id="messages"></div><br></b>

<form id="bookForm" novalidate>
<div>
<label> Id:</label>
<input type="text" id="id">
</div>

  <div>
    <label for="id-module">Módulo:</label>
    <select id="id-module" required>
      <option value="" disabled selected>- Selecciona un módulo -</option>
    </select>
    <span class="error">  </span>
  </div>

  <div>
    <label for="publisher">Editorial:</label>
    <input type="text" id="publisher" required>
        <span class="error">  </span>

  </div>

  <div>
    <label for="price">Precio:</label>
    <input type="number" id="price" required min="0" step="0.01" placeholder="0.00">
        <span class="error">  </span>

  </div>

  <div>
    <label for="pages">Páginas:</label>
    <input type="number" id="pages" required min="0" step="1" placeholder="0">
        <span class="error">  </span>

  </div>

  <div>
    <label>Estado:</label>
    <input type="radio" id="nuevo" value="nuevo" name="status" required>
    <label for="nuevo">Nuevo</label>
    <input type="radio" id="bueno" value="bueno" name="status" required>
    <label for="viejo">Bueno</label>
    <input type="radio" id="malo" value="malo" name="status" required>
    <label for="viejo">Malo</label>
        <span class="error">  </span>

  </div>

  <div>
    <label for="comments">Comentarios:</label>
    <textarea id="comments"></textarea>
  </div>

  <button type="submit">Añadir</button>
  <button type="reset">Reset</button>
</form>
</div>
<div id="about"></div>
`;document.addEventListener("DOMContentLoaded",()=>{new P().init()});
