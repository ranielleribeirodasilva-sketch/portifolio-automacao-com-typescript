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