import { http } from './config';

export default {

    listar: () => { },

    consultarFrete: (frete) => {
        console.log(JSON.stringify(frete));

        return http.post('correios', frete);

    },
    salvar: (quotation) => {
        return http.post('quotations', quotation);
    }



}