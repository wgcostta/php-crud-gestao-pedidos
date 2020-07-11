import { http } from './config';

export default {

    listar: () => { },

    consultarFrete: (frete) => {
        console.log(JSON.stringify(frete));

        return http.post('correios', frete);

    },

    apagar: (product) => {
        let urlEnvio = 'product/' + product.id + '/delete';
        return http.delete(urlEnvio, { data: product })
    }

}