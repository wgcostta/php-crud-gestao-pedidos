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
    },
    validationProduct: (product) => {
        let $mensagem = '';
        if (
            product.peso == "" ||
            product.nome == "" ||
            product.altura == "" ||
            product.comprimento == "" ||
            product.largura == ""
        ) {
            $mensagem = "Todos os Campos devem ser informados";
        } else {
            if (product.peso > 30) {
                $mensagem = "Peso deve ser até 30 kg";
            } else if (
                product.comprimento < 16 ||
                product.comprimento > 105
            ) {
                $mensagem = "Informe um comprimento de 16 cm até 105 cm";
            } else if (product.largura < 11 || product.largura > 105) {
                $mensagem = "Informe uma largura de 11 cm até 105 cm";
            } else if (product.altura < 2 || product.altura > 105) {
                $mensagem = "Informe uma altura de 2 cm até 105 cm";
            } else {
                let dimensoes =
                    Number(product.comprimento) +
                    Number(product.largura) +
                    Number(product.altura);
                if (dimensoes > 200) {
                    $mensagem =
                        "A soma das dimensões não pode ultrapassar 200 cm. Dimensões atuais: " +
                        dimensoes;
                }
            }

            return $mensagem;
            /*- Comprimento: 16cm à 105cm; Altura: 2cm à 105cm; Largura: 11cm à 105cm;
            - Soma máxima das dimensões: 200cm.
            - Limite de peso: 30kg. */
        }

    }

}