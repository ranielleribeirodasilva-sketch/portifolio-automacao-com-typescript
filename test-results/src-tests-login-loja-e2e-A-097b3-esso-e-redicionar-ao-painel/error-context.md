# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/login-loja-e2e.spec.ts >> ATO 2 - Caminho feliz >> validar acesso e redicionar ao painel
- Location: src/tests/login-loja-e2e.spec.ts:33:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#email')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "404" [level=1] [ref=e3]
  - paragraph [ref=e4]:
    - strong [ref=e5]: File not found
  - paragraph [ref=e6]: The site configured at this address does not contain the requested file.
  - paragraph [ref=e7]:
    - text: If this is your site, make sure that the filename case matches the URL as well as any file permissions. For root URLs (like
    - code [ref=e8]: http://example.com/
    - text: ) you must provide an
    - code [ref=e9]: index.html
    - text: file.
  - paragraph [ref=e10]:
    - link "Read the full documentation" [ref=e11] [cursor=pointer]:
      - /url: https://help.github.com/pages/
    - text: for more information about using
    - strong [ref=e12]: GitHub Pages
    - text: .
  - generic [ref=e13]:
    - link "GitHub Status" [ref=e14] [cursor=pointer]:
      - /url: https://githubstatus.com
    - text: —
    - link "@githubstatus" [ref=e15] [cursor=pointer]:
      - /url: https://twitter.com/githubstatus
  - link [ref=e16] [cursor=pointer]:
    - /url: /
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // 1. A URL base já termina com 'login.html'
  4  | const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html';
  5  | 
  6  | // 2. Removido o 'async' do test.describe
  7  | test.describe('ato 1 - validar carregamento e visibilidade de elementos', () => {
  8  | 
  9  |   test('Validar titulo de carregamento da pagina', async ({ page }) => {
  10 |     // Passando a constante diretamente (sem interpolação com aspas simples)
  11 |     await page.goto(BASE_URL);
  12 |     
  13 |     // Validar título da página
  14 |     await expect(page).toHaveTitle(/LojaQA | entrar/i);
  15 |   });
  16 | 
  17 |   test('Verificar exibicao dos campos do form de login', async ({ page }) => {
  18 |     // Passando a constante diretamente
  19 |     await page.goto(BASE_URL);
  20 | 
  21 |     // Validar campos do formulário
  22 |     await expect(page.locator('#email')).toBeVisible();
  23 |     await expect(page.locator('#password')).toBeVisible();
  24 |     await expect(page.locator('#loginBtn')).toBeVisible();
  25 |     
  26 |     // Verificar se botão de login está desabilitado
  27 |     await expect(page.locator('#loginBtn')).toBeDisabled();
  28 |   });
  29 | 
  30 | });
  31 | 
  32 | test.describe('ATO 2 - Caminho feliz', () => {
  33 |   test('validar acesso e redicionar ao painel', async ({ page }) => {
  34 |     //navegar ate a pagina de login
  35 |     await page.goto(`${BASE_URL}/login.html`);
  36 |     //preencher campos utilizando o fill()
> 37 |     await page.fill('#email','admin@system.com');
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  38 |     await page.fill('#password','adminPassword123');  
  39 |     //validar botao ativo
  40 |     await expect(page.locator('#loginBtn')).toBeEnabled();
  41 |     //acao de clique no btn
  42 |     await page.click('#loginBtn');
  43 |     //validar redirecionamento para a pagina de painel
  44 |     await expect(page).toHaveURL(/painel\.html/);
  45 | })
  46 | })
  47 | 
  48 | 
```