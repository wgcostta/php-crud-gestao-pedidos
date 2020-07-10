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

    salvar: (product) => {
        return http.post('product', product);
    },

    atualizar: (product) => {
        return http.put('product', product);
    },

    apagar: (product) => {
        return http.delete('product', { data: product })
    }

}