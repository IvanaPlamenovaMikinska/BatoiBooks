import './style.css'
import logoBatoi from '/logoBatoi.png'

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

setupCounter(document.querySelector('#counter'))
