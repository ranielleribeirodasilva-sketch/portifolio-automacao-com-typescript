// 1. Uso de Arrays e Objetos
export type ExecucaoTeste = {
  id: number;
  nome: string;
  status: 'PASS' | 'FAIL';
};

export const testesExecutados: ExecucaoTeste[] = [
  { id: 1, nome: 'Login com sucesso', status: 'PASS' },
  { id: 2, nome: 'Cadastro invalido', status: 'FAIL' },
  { id: 3, nome: 'Agendamento de consulta', status: 'PASS' },
];

// 2. Simulação de uma Promise com setTimeout
export function buscarTesteDoBanco(id: number): Promise<ExecucaoTeste> {
  // O executor da Promise recebe resolve (sucesso) e reject (erro)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const testeEncontrado = testesExecutados.find((t) => t.id === id);

      if (testeEncontrado) {
        resolve(testeEncontrado); // Promise cumprida com valor
      } else {
        reject(new Error(`Teste com ID ${id} não encontrado.`)); // Promise rejeitada com erro
      }
    }, 100); // Simula atraso de 100ms de rede/banco
  });
}

// 3. Função assíncrona com async/await e explicação do fluxo em comentários
export async function processarBuscaDeTeste(id: number): Promise<string> {
  /*
   * FLUXO ASSÍNCRONO EXPLICADO:
   * 1. A palavra-chave `async` define que a função retorna uma Promise.
   * 2. O `await` pausa a execução desta função (sem bloquear a thread principal)
   *    até que a Promise `buscarTesteDoBanco` seja resolvida ou rejeitada.
   * 3. O bloco `try/catch` captura rejeições da Promise de forma limpa.
   */
  try {
    const teste = await buscarTesteDoBanco(id);
    return `Resultado: ${teste.nome} -> ${teste.status}`;
  } catch (erro) {
    if (erro instanceof Error) {
      return `Erro: ${erro.message}`;
    }
    return 'Erro desconhecido.';
  }
}