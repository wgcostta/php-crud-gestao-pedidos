# APIs para gestão de produtos, pedidos e cotação de frete para lojas


Teste de Conhecimentos - Programador PHP
Objetivo
Criar uma aplicação para o cadastro de pedidos e cotação de frete utilizando a linguagem PHP, Banco
de dados Mysql ou Postgres e linguagens Web (HTML, CSS e JavaScript). Será necessário criar APIs e
uma interface visual para exibição das informações a partir das APIs desenvolvidas.
Etapa 1 - API
Desenvolver APIs para gestão de produtos, pedidos e cotação de frete para lojas (sugerimos utilizar o
framework Laravel para a criação dessas APIs).
• Endpoints: products (para gestão dos produtos) orders (para gestão dos pedidos) e quotations
(para a gestão de cotação de frete)
Segue abaixo os dados de entrada e saída para os Endpoints.
- Produtos
Serviços Entrada Saída
Cadastro de Produto 
Entrada :- Nome. - Dimensões. - Peso.
Saida: - Código. - Nome. - Dimensões. - Peso.
Listagem de Produtos Array [
- Código.
- Nome.
- Dimensões.
- Peso.
]
Detalhes do Produto - Código.
- Nome.
- Dimensões.
- Peso.
- Pedidos
Serviços Entrada Saída

Cadastro de Pedido 
Entrada: - CEP Origem - CEP Destino - Produto (Só deve ter um produto no pedido)
Saida: - Código - CEP Origem - CEP Destino - Produto

Listagem de Pedidos Array[
- Código
- CEP Origem
- CEP Destino
- Produto
]

Detalhes do Pedido - Código
- CEP Origem
- CEP Destino
- Produto
- Cotação de Frete
Serviços Entrada Saída

Cotação de Frete 
Entrada: - Pedido (Deve-se informar um pedido) - Código do Serviço
Saida: - Código do Serviço - Valor de Frete - Prazo de Entrega

Dicas:
1 - Utilizar os métodos HTTP para diferenciar as listagens, visualização e criação.
2 - Documentação fornecida pelos correios para cotações (Dica: utilizar o método CalcPrecoPrazo).
https://www.correios.com.br/enviar-e-receber/ferramentas/calculador-remoto-de-precos-e-prazos/pdf/man
ual-de-implementacao-do-calculo-remoto-de-precos-e-prazos
3 - Os correios têm dimensões mínimas para o item, sendo elas:
- Comprimento: 16cm à 105cm; Altura: 2cm à 105cm; Largura: 11cm à 105cm;
- Soma máxima das dimensões: 200cm.
- Limite de peso: 30kg.
4 - Código de serviço do Correios - 04510 (PAC) e 04014 (SEDEX).

Etapa 2 - Interface Visual
Desenvolver uma interface visual (de preferência responsivo) para utilizar as APIs acima na criação e
consultas de produtos, pedidos e cotação.

**Etapa 2 - FrontEnd**
Pode criar uma outra aplicação independente da API ou utilizar a mesma aplicação para a criação da
interface visual (sugerimos utilizar o framework VueJS ou ReactJS para a criação da interface visual)


Etapa 3 - Disponibilizar o projeto no Git
Subir o projeto no GitHub ou similar, deixá-lo público e mandar o link para avaliação.
Criar o README do projeto com as especificações técnicas e instruções de uso e instalação.
A aplicação pode estar disponível na nuvem (Heroku, Digital Ocean etc), disponibilizar os containers
 
