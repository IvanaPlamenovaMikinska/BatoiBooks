import './style.css'
import logoBatoi from '/logoBatoi.png'
import Controller from './src/controller/controller.class'

document.querySelector('#app').innerHTML = `
<header>
<img src="${logoBatoi}" alt="Batoi Logo" />
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
`

document.addEventListener('DOMContentLoaded', () => {
  const myController = new Controller()
  myController.init()
})