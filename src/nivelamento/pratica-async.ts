// Importando função utilitária de aguardar tempo (delay)
import { aguardar } from "../../utils/helpers";

function simularLogin(usuario: string, senha: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        // Simulando tempo de espera da requisição de rede
        await aguardar(1500); 

        if (usuario === 'admin' && senha === '123456') {
            resolve('token-secreto-aprovado-123');
        } else {
            reject('ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS! X');
        }
    });
}

// FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT
async function executarCT() {
    console.log('INICIANDO CENÁRIO DE TESTE ;D');
    try {
        console.log('Passo 1: Abrindo tela de login...');
        await aguardar(2000);

        console.log('Passo 2: Inserindo credenciais...');
        await aguardar(3000);

        const token = await simularLogin('admin', '123456');
        console.log(`SUCESSO! USUÁRIO LOGADO TOKEN RECEBIDO: ${token}\n`);
    } catch (erro) {
        console.log(`FALHA NO TESTE: ${erro}\n`);
    } finally {
        console.log(`Passo final: Fechando navegador e limpando dados.`);
    }
}

// Execução da função principal de teste
executarCT();
