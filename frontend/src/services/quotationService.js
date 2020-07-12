import { http } from './config';

export default {

    listar: () => {
        return http.get('quotations');
    },

    consultarFrete: (frete) => {
        console.log(JSON.stringify(frete))
        return http.post('correios', frete);

    },
    salvarPac: (quotation) => {
        return http.post('quotations', quotation);
    },
    salvarSedex: (quotation) => {
        return http.post('quotations', quotation);
    },
    apagar: (quotation) => {

        return http.delete('quotations/' + quotation.id, { data: quotation })
    },


}