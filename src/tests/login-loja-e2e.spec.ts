import { test, expect } from '@playwright/test';

const BASE_URL = 'https://github.io';

test.describe('ATO 1 - Validar carregamento e visibilidade de elementos', () => {
    
    test('Validar título de carregamento da página', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page).toHaveTitle(/LojaQA | Entrar/);
    });

    test('Verificar exibição dos campos do formulário de login', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeDisabled();
    });
});

test.describe('ATO 2 - Caminho feliz', () => {
    
    test('Validar acesso e redirecionar ao painel', async ({ page }) => {
        await page.goto(BASE_URL);
        await page.fill('#email', 'user@system.com');
        await page.fill('#password', 'UserPassword123');
        await expect(page.locator('#loginBtn')).toBeEnabled();
        await page.click('#loginBtn');
        await expect(page).toHaveURL(/.*painel/); 
    });
});

test.describe('ATO 3 - Fluxos de cadastro e login de novos usuários', () => {

    test('Criar usuário cliente, validar cadastro e realizar login', async ({ page }) => {
        const idUnico = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        const emailCliente = `cliente_${idUnico}@system.com`;

        await page.goto(BASE_URL);
        await page.click('text=Criar conta');

        await page.fill('#registerName', 'Cliente de Teste');
        await page.fill('#registerEmail', emailCliente);
        await page.fill('#registerPassword', 'ClienteSenha123');
        await page.selectOption('#registerRole', 'client');
        await page.click('#registerBtn');

        // Recomendado: Validar se apareceu mensagem de sucesso ou modal antes de prosseguir
        await page.click('text=Voltar para login');

        await page.fill('#email', emailCliente);
        await page.fill('#password', 'ClienteSenha123');
        await page.click('#loginBtn');
        await expect(page).toHaveURL(/.*painel/);
    });

    test('Criar usuário lojista, validar cadastro e realizar login', async ({ page }) => {
        const idUnico = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        const emailLojista = `lojista_${idUnico}@system.com`;

        await page.goto(BASE_URL);
        await page.click('text=Criar conta');

        await page.fill('#registerName', 'Lojista de Teste');
        await page.fill('#registerEmail', emailLojista);
        await page.fill('#registerPassword', 'LojistaSenha123');
        await page.selectOption('#registerRole', 'seller');
        await page.fill('#storeName', 'Minha Loja de Teste');
        await page.click('#registerBtn');

        // Recomendado: Validar se apareceu mensagem de sucesso ou modal antes de prosseguir
        await page.click('text=Voltar para login');

        await page.fill('#email', emailLojista);
        await page.fill('#password', 'LojistaSenha123');
        await page.click('#loginBtn');
        await expect(page).toHaveURL(/.*painel/);
    });
});