import { describe, it, expect } from 'vitest';
import {
  testesExecutados,
  buscarTesteDoBanco,
  processarBuscaDeTeste,
} from './exercicio';

describe('Testes do Exercício - Arrays, Promises e Async/Await', () => {
  // Teste de Array e Objeto
  it('deve conter a lista de testes executados válida', () => {
    expect(testesExecutados).toHaveLength(3);
    expect(testesExecutados[0]).toHaveProperty('nome', 'Login com sucesso');
  });

  // Teste de Promise (Caminho de Sucesso)
  it('deve buscar um teste existente no banco via Promise', async () => {
    const resultado = await buscarTesteDoBanco(1);
    expect(resultado.status).toBe('PASS');
  });

  // Teste de Promise (Caminho de Erro/Rejeição)
  it('deve rejeitar a Promise quando o id do teste não existir', async () => {
    await expect(buscarTesteDoBanco(99)).rejects.toThrow(
      'Teste com ID 99 não encontrado.'
    );
  });

  // Teste da função async/await
  it('deve processar a busca de teste com sucesso usando async/await', async () => {
    const mensagem = await processarBuscaDeTeste(1);
    expect(mensagem).toBe('Resultado: Login com sucesso -> PASS');
  });
});