const SERVER = 'http://localhost:3000/modules/'
//const SERVER = 'http://ivanaplamenova.projecte1.es:5050/modules/'
export async function getDBModules() {
    const response = await fetch(SERVER);
    if(!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const modules = await response.json();
    return modules
}