import { http } from './config';

export default {

    listar: () => {
        return http.get('quotations');
    },

    consultarFrete: (frete) => {

        return http.post('correios', frete);

    },
    salvarPac: (quotation) => {
        return http.post('quotations', quotation);
    },
    salvarSedex: (quotation) => {
        return http.post('quotations', quotation);
    }



}