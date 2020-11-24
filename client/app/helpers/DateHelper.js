class DateHelper {

    constructor(){
        throw new Error('Datehelper não pode ser instânciado');
    }

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw Error('A data não está no formato exigido yyyy-MM-dd.')
        let listaData = texto.split('-').map(d => +d)
        //decrementar numero que representará mês pois na API de mês
        // recebe mes a partir de 0 como sendo janeiro
        listaData[1]--       
        //adicionando no construtor de date com spred operator
        return new Date(...listaData)
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
    }
}