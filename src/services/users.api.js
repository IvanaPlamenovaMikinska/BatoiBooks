const SERVER = 'http://localhost:3000/users/'
export async function getDBUsers() {
    const response = await fetch(SERVER);
    if(!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const users = await response.json();
    return users
}

export async function getDBUser(id) {
    const response = await fetch(SERVER + id);
    if(!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const user = await response.json();
    return user
}

export async function addDBUser(user) {
    const response = await fetch(SERVER, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const usuario = await response.json()
      return usuario
}

export async function removeDBUser(id) {
    const response = await fetch(SERVER + id, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const user = await response.json()
      return user
}

export async function changeDBUser(usuario) {
    const response = await fetch(SERVER + usuario.id, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const userCambiado = await response.json()
      return userCambiado
}

export async function changeDBUserPassword(id, nuevaContrasenya) {
    const response = await fetch(SERVER + id, {
        method: 'PATCH',
        body: JSON.stringify({password: nuevaContrasenya}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      }
      const contraCambiada = await response.json()
      return contraCambiada
}

