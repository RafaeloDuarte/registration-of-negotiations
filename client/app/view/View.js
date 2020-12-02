class View {

    constructor(elemento){
        this._elemento = elemento
    }

    template(){
        throw new Error('O método template deve ser implementado nas classes filhas')
    }

    update(model){
        this._elemento.innerHTML = this._template(model)
    }
}