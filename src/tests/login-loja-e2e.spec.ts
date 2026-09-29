import { test, expect } from '@playwright/test';

// 1. A URL base já termina com 'login.html'
const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html';

// 2. Removido o 'async' do test.describe
test.describe('ato 1 - validar carregamento e visibilidade de elementos', () => {

  test('Validar titulo de carregamento da pagina', async ({ page }) => {
    // Passando a constante diretamente (sem interpolação com aspas simples)
    await page.goto(BASE_URL);
    
    // Validar título da página
    await expect(page).toHaveTitle(/LojaQA | entrar/i);
  });

  test('Verificar exibicao dos campos do form de login', async ({ page }) => {
    // Passando a constante diretamente
    await page.goto(BASE_URL);

    // Validar campos do formulário
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
    
    // Verificar se botão de login está desabilitado
    await expect(page.locator('#loginBtn')).toBeDisabled();
  });

});

test.describe('ATO 2 - Caminho feliz', () => {
  test('validar acesso e redicionar ao painel', async ({ page }) => {
    //navegar ate a pagina de login
    await page.goto(`${BASE_URL}/login.html`);
    //preencher campos utilizando o fill()
    await page.fill('#email','admin@system.com');
    await page.fill('#password','adminPassword123');  
    //validar botao ativo
    await expect(page.locator('#loginBtn')).toBeEnabled();
    //acao de clique no btn
    await page.click('#loginBtn');
    //validar redirecionamento para a pagina de painel
    await expect(page).toHaveURL(/painel\.html/);
})
})

