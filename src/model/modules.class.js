import Module from './module.class'
export default class Modules {
    constructor() {
        this.data = []
    }

    populate(modulos) {
        for (const modulo of modulos) {
            this.data.push(new Module(modulo.code, modulo.cliteral, 
                modulo.vliteral, modulo.courseId))
        }
    }

    toString() {
        let cadena = 'Modulos: '
        this.data.forEach(modulo => {
            cadena = cadena + modulo.toString()
        });
        return cadena
    }

    getModuleByCode(moduleCode) {
        const module = this.data.find(modulo => moduleCode === modulo.code);
        if(module) {
            return module;
        }
        throw "No se ha encontrado ningun modulo con este codigo";
    }
    
}