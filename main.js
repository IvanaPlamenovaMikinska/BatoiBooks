import './style.css'
import logoBatoi from '/logoBatoi.png'
import data from './src/services/datos'
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
<div id="list"></div>
<div id="form"><br>
<b><div id="messages"></div><br></b>
<div>
  <label for="id-remove">Id:</label>
  <input type="text" id="id-remove">
  <button id="remove">Borrar libro</button>
</div>
<form id="bookForm">
  <div>
    <label for="id-module">Módulo:</label>
    <select id="id-module">
      <option>- Selecciona un módulo -</option>
    </select>
  </div>

  <div>
    <label for="publisher">Editorial:</label>
    <input type="text" id="publisher" required>
  </div>

  <div>
    <label for="price">Precio:</label>
    <input type="number" id="price">
  </div>

  <div>
    <label for="pages">Páginas:</label>
    <input type="number" id="pages">
  </div>

  <div>
    <label>Estado:</label>
    <input type="radio" id="new" value="new" name="status">
    <label for="nuevo">Nuevo</label>
    <input type="radio" id="old" value="old" name="status">
    <label for="viejo">Viejo</label>
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