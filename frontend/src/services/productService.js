import { http } from './config'

export default {
    listar: () => {
        return http.get('product');
        /*        let response = http.get('product');
                if (response.status == 200) {
                    return response.data;
                    console.log(response.data);
        
                } else {
                    console.error("Ocorreu um erro na API.");
                }*/
    },

    carregar: (id) => {

        return http.get('product/' + id);

    },

    salvar: (product) => {
        return http.post('product', product);
    },

    atualizar: (product) => {
        let urlEnvio = 'product/' + product.id + '/update';
        return http.post(urlEnvio, product);
    },

    apagar: (product) => {
        let urlEnvio = 'product/' + product.id + '/delete';
        return http.delete(urlEnvio, { data: product })
    }

}