class NegociacaoController {

    constructor(){
        //colocar a lógica de percorrer a DOM dentro do método construtor 
        // é uma boa prática pois fará com que seja percorrido apenas uma vez
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._form = $('form')
        
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView._update(this._listaNegociacoes)

        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagem = new Mensagem()
    }

    adiciona(event){

        event.preventDefault()
        this._listaNegociacoes._adiciona(this._criacaoNegocio())
        this._mensagem.texto = 'Negociação adicionada com sucesso.'
        this._mensagemView._update(this._mensagem)
        this._negociacoesView._update(this._listaNegociacoes)
        this._resetaForm()
    }
    
    _criacaoNegocio(){
        let date = DateHelper.textoParaData(this._inputData.value)
        return new Negociacoes(
            date,
            this._inputQuantidade.value,
            this._inputValor.value
            )        
    }

    _resetaForm(){
        this._form.reset()
        this._inputData.focus()
    }
}