// 1. Criação do novo type com no mínimo dois campos
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

// 2. Declaração das variáveis utilizando o type criado
const produto1: Produto = {
    nome: 'Teclado ',
    preco: 250.00,
    emEstoque: true
};

const produto2: Produto = {
    nome: 'Mouse Gamer',
    preco: 120.00,
    emEstoque: false
};

// 3. Função que recebe o tipo Produto e utiliza uma condicional ternária
function verificarDisponibilidade(item: Produto): string {
    // Sintaxe do operador ternário: condição ? valorSeVerdadeiro : valorSeFalso
    return item.emEstoque 
        ? `O produto "${item.nome}" custa R$ ${item.preco.toFixed(2)} e está disponível para compra!` 
        : `Desculpe, o produto "${item.nome}" está fora de estoque no momento.`;
}

// 4. Chamada e execução da função
console.log(verificarDisponibilidade(produto1));
console.log(verificarDisponibilidade(produto2));

