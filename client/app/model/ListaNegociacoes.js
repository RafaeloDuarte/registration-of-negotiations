class ListaNegociacoes{
    constructor(){
        this._negociacoes = []
    }

    _adiciona(negociacao){
        this._negociacoes.push(negociacao)
    }

    get negociacoes(){
        return [].concat(this._negociacoes)
    }

}