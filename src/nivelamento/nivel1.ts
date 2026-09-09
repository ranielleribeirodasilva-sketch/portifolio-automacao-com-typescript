// Formas de tipar
// Forma 1: Declaração com tipo explícito sem inicialização
let idade: number;

// Forma 2: Inferência de tipo (o TypeScript entende sozinho que é string)
const nome = 'seu Zezo';

// Forma 3: Não recomendado por ser redundante (tipagem explícita com valor inicial)
const sobreNome: string = 'da Silva';

// Tipagens especiais / Tipos customizados
type usuario = { nick: string; age: number };

let jogador: usuario = { nick: 'Ricardo', age: 18 };
let jogadorVelho: usuario = { nick: 'Toin', age: 76 };

function verificarIdade(usuarioAtual: usuario) {
    if (usuarioAtual.age >= 21) {
        // Corrigido: Usando crases (template literals) para interpolação
        console.log(`Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso jogo de pei pei!`);
    } else {
        // Corrigido: Usando crases (template literals) para interpolação
        console.log(`EI ${usuarioAtual.nick} É de menor pode pei pei não tem só ${usuarioAtual.age} anos um bebê😊`);
    }
}

verificarIdade(jogador);
verificarIdade(jogadorVelho);


// 1. Criação do novo type com no mínimo dois campos
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

// 2. Declaração das variáveis utilizando o type criado
const produto1: Produto = {
    nome: 'Teclado Mecânico',
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

