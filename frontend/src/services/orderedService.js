import { http } from './config';

export default {

    listar: () => { },

    salvar: (ordered) => {
        console.log(JSON.stringify(ordered))
        return http.post('orders', ordered);
    },

    validationOrdered: (ordered) => {
        let $mensagem = '';
        if (
            ordered.ceporigem == "" ||
            ordered.cepdestino == "" ||
            ordered.quantidade == ""
        ) {
            $mensagem = "Todos os Campos devem ser informados";
        } else {

            if (ordered.ceporigem < 10000000 || ordered.ceporigem > 99999999) {
                $mensagem = ('Numero de Cep Origem Invalido!')
            } else if (ordered.cepdestino < 10000000 || ordered.cepdestino > 99999999) {
                $mensagem = ('Numero de Cep Destino Invalido!')
            }
        }
        return $mensagem;
    }



}