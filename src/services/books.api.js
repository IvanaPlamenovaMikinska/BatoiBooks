const SERVER = 'http://localhost:3000/books/'
//const SERVER = 'http://ivanaplamenova.projecte1.es:5050/books/'
export async function getDBBooks() {
    const response = await fetch(SERVER);
    if(!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const books = await response.json();
    return books
}

export async function getDBBook(id) {
    const response = await fetch(SERVER + id);
    if(!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const book = await response.json();
    return book
}

export async function addDBBook(book) {
    const response = await fetch(SERVER, {
        method: 'POST',
        body: JSON.stringify(book),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const libro = await response.json()
      return libro
}

export async function removeDBBook(id) {
    const response = await fetch(SERVER + id, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const libro = await response.json()
      return libro
}

export async function changeDBBook(libro) {
    const response = await fetch(SERVER + libro.id, {
        method: 'PUT',
        body: JSON.stringify(libro),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const libroCambiado = await response.json()
      return libroCambiado
}