import './style.css'
import logoBatoi from '/logoBatoi.png'
import { booksFromUser, booksFromModule, booksWithStatus, incrementPriceOfbooks } from './src/functions'
import data from './src/services/datos'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://portal.edu.gva.es/cipfpbatoi/" target="_blank">
      <img src="${logoBatoi}" class="logo" alt="Batoi Logo" />
    </a>
    <h1>BatoiBooks</h1>
    <p class="read-the-docs">
      Abre la consola para ver el resultado
    </p>
  </div>
`


console.log(booksFromUser(data.books, 4));
console.log(booksFromModule(data.books, '5021'));
console.log(booksWithStatus(data.books, "good"));
console.log(incrementPriceOfbooks(data.books, 0.1));