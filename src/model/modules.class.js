import Module from './module.class'
import { getDBModules,} from '../services/modules.api'
export default class Modules {
    constructor() {
        this.data = []
    }

    async populate() {
        const modulos = await getDBModules();
        this.data = modulos.map(modulo =>
            new Module(modulo.code, modulo.cliteral,
                modulo.vliteral, modulo.courseId));
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
        if (module) {
            return module;
        }
        throw "No se ha encontrado ningun modulo con este codigo";
    }

}