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
    }

}