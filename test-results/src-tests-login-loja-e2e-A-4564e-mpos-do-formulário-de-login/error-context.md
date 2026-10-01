# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/login-loja-e2e.spec.ts >> ATO 1 - Validar carregamento e visibilidade de elementos >> Verificar exibição dos campos do formulário de login
- Location: src/tests/login-loja-e2e.spec.ts:12:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#email')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#email') with timeout 5000ms
  - waiting for locator('#email')
    - waiting for "https://docs.github.com/en/pages" navigation to finish...
    - navigated to "https://docs.github.com/en/pages"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- link "Skip to content":
  - /url: "#main-content"
- banner "Main":
  - navigation "Header logo and title":
    - list:
      - listitem:
        - link "Github Home":
          - /url: /en
      - listitem:
        - link "Docs home":
          - /url: /en
          - text: GitHub Docs
  - text: "Select your plan:"
  - 'button "Select your plan: Free, Pro, & Team"': Free, Pro, & Team
  - button "Search or ask Copilot": Search or ask Copilot /
  - 'button "Select language: current language is English"': English
  - link "Sign up":
    - /url: https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs
- button "Collapse sidebar" [expanded]
- navigation "Breadcrumb":
  - list:
    - listitem:
      - link "Home":
        - /url: /en
    - listitem: GitHub Pages
- navigation "GitHub Pages":
  - heading "GitHub Pages" [level=2]:
    - link "GitHub Pages":
      - /url: /en/pages
  - region "Page navigation content":
    - navigation "Product sidebar":
      - list:
        - listitem:
          - link "Quickstart":
            - /url: /en/pages/quickstart
        - listitem:
          - button "Get started"
        - listitem:
          - button "Set up site with Jekyll"
        - listitem:
          - button "Configure a custom domain"
- main:
  - heading "GitHub Pages documentation" [level=1]
  - paragraph: GitHub Pages turns any GitHub repository into a live website—no separate hosting required.
  - link "Quickstart":
    - /url: /pages/quickstart
  - link "Overview":
    - /url: /pages/getting-started-with-github-pages/what-is-github-pages
  - heading "Articles" [level=2]
  - 'button "Category: All categories"'
  - textbox "Search articles"
  - text: Learn about GitHub Pages
  - heading "About custom domains and GitHub Pages" [level=3]:
    - link "About custom domains and GitHub Pages":
      - /url: /en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
  - paragraph: GitHub Pages supports using custom domains, or changing the root of your site's URL from the default, like octocat.github.io, to any domain you own.
  - text: Learn about GitHub Pages
  - heading "About GitHub Pages and Jekyll" [level=3]:
    - link "About GitHub Pages and Jekyll":
      - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
  - paragraph: Jekyll is a static site generator with built-in support for GitHub Pages.
  - text: Set up a GitHub Pages site
  - heading "About Jekyll build errors for GitHub Pages sites" [level=3]:
    - link "About Jekyll build errors for GitHub Pages sites":
      - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites
  - paragraph: If Jekyll encounters an error building your GitHub Pages site locally or on GitHub, you'll receive an error message with more information.
  - text: Set up a GitHub Pages site
  - heading "Adding a theme to your GitHub Pages site using Jekyll" [level=3]:
    - link "Adding a theme to your GitHub Pages site using Jekyll":
      - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
  - paragraph: You can personalize your Jekyll site by adding and customizing a theme.
  - text: Managing a GitHub Pages site
  - heading "Adding content to your GitHub Pages site using Jekyll" [level=3]:
    - link "Adding content to your GitHub Pages site using Jekyll":
      - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll
  - paragraph: You can add a new page or post to your Jekyll site on GitHub Pages.
  - text: Set up a GitHub Pages site
  - heading "Configuring a publishing source for your GitHub Pages site" [level=3]:
    - link "Configuring a publishing source for your GitHub Pages site":
      - /url: /en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
  - paragraph: You can configure your GitHub Pages site to publish when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site.
  - text: Set up a GitHub Pages site
  - heading "Creating a custom 404 page for your GitHub Pages site" [level=3]:
    - link "Creating a custom 404 page for your GitHub Pages site":
      - /url: /en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
  - paragraph: You can display a custom 404 error page when people try to access nonexistent pages on your site.
  - text: Set up a GitHub Pages site
  - heading "Creating a GitHub Pages site" [level=3]:
    - link "Creating a GitHub Pages site":
      - /url: /en/pages/getting-started-with-github-pages/creating-a-github-pages-site
  - paragraph: You can create a GitHub Pages site in a new or existing repository.
  - text: Set up a GitHub Pages site
  - heading "Creating a GitHub Pages site with Jekyll" [level=3]:
    - link "Creating a GitHub Pages site with Jekyll":
      - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
  - paragraph: You can use Jekyll to create a GitHub Pages site in a new or existing repository.
  - text: Showing 1-9 of 24
  - navigation "Pagination":
    - button "Previous Page" [disabled]: Previous
    - button "Page 1": "1"
    - button "Page 2": "2"
    - button "Page 3...": "3"
    - button "Next Page": Next
- contentinfo:
  - link "GitHub":
    - /url: https://github.com
  - button "Back to top"
  - heading "Help and support" [level=2]
  - heading "Was this Doc helpful?" [level=3]
  - radiogroup "Was this Doc helpful?":
    - radio "Yes"
    - text: "Yes"
    - radio "No"
    - text: "No"
  - heading "Help us make GitHub Docs great!" [level=3]
  - paragraph: All Docs are open source. See something that's wrong or unclear? Submit a pull request.
  - link "Make a contribution":
    - /url: https://github.com/github/docs/blob/main/content/pages/index.md
  - heading "Still need help?" [level=3]
  - link "Ask the GitHub community":
    - /url: https://github.com/orgs/community/discussions
  - link "Contact support":
    - /url: https://support.github.com
  - link "Expert services":
    - /url: https://services.github.com
  - link "Blog":
    - /url: https://github.blog
  - paragraph:
    - text: GitHub Inc. © 2026
    - link "Terms":
      - /url: /en/site-policy/github-terms/github-terms-of-service
    - link "Privacy":
      - /url: /en/site-policy/privacy-policies/github-privacy-statement
    - link "Status":
      - /url: https://www.githubstatus.com/
    - link "Pricing":
      - /url: https://github.com/pricing
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://github.io';
  4  | 
  5  | test.describe('ATO 1 - Validar carregamento e visibilidade de elementos', () => {
  6  |     
  7  |     test('Validar título de carregamento da página', async ({ page }) => {
  8  |         await page.goto(BASE_URL);
  9  |         await expect(page).toHaveTitle(/LojaQA | Entrar/);
  10 |     });
  11 | 
  12 |     test('Verificar exibição dos campos do formulário de login', async ({ page }) => {
  13 |         await page.goto(BASE_URL);
> 14 |         await expect(page.locator('#email')).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  15 |         await expect(page.locator('#password')).toBeVisible();
  16 |         await expect(page.locator('#loginBtn')).toBeVisible();
  17 |         await expect(page.locator('#loginBtn')).toBeDisabled();
  18 |     });
  19 | });
  20 | 
  21 | test.describe('ATO 2 - Caminho feliz', () => {
  22 |     
  23 |     test('Validar acesso e redirecionar ao painel', async ({ page }) => {
  24 |         await page.goto(BASE_URL);
  25 |         await page.fill('#email', 'user@system.com');
  26 |         await page.fill('#password', 'UserPassword123');
  27 |         await expect(page.locator('#loginBtn')).toBeEnabled();
  28 |         await page.click('#loginBtn');
  29 |         await expect(page).toHaveURL(/.*painel/); 
  30 |     });
  31 | });
  32 | 
  33 | test.describe('ATO 3 - Fluxos de cadastro e login de novos usuários', () => {
  34 | 
  35 |     test('Criar usuário cliente, validar cadastro e realizar login', async ({ page }) => {
  36 |         const idUnico = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  37 |         const emailCliente = `cliente_${idUnico}@system.com`;
  38 | 
  39 |         await page.goto(BASE_URL);
  40 |         await page.click('text=Criar conta');
  41 | 
  42 |         await page.fill('#registerName', 'Cliente de Teste');
  43 |         await page.fill('#registerEmail', emailCliente);
  44 |         await page.fill('#registerPassword', 'ClienteSenha123');
  45 |         await page.selectOption('#registerRole', 'client');
  46 |         await page.click('#registerBtn');
  47 | 
  48 |         // Recomendado: Validar se apareceu mensagem de sucesso ou modal antes de prosseguir
  49 |         await page.click('text=Voltar para login');
  50 | 
  51 |         await page.fill('#email', emailCliente);
  52 |         await page.fill('#password', 'ClienteSenha123');
  53 |         await page.click('#loginBtn');
  54 |         await expect(page).toHaveURL(/.*painel/);
  55 |     });
  56 | 
  57 |     test('Criar usuário lojista, validar cadastro e realizar login', async ({ page }) => {
  58 |         const idUnico = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  59 |         const emailLojista = `lojista_${idUnico}@system.com`;
  60 | 
  61 |         await page.goto(BASE_URL);
  62 |         await page.click('text=Criar conta');
  63 | 
  64 |         await page.fill('#registerName', 'Lojista de Teste');
  65 |         await page.fill('#registerEmail', emailLojista);
  66 |         await page.fill('#registerPassword', 'LojistaSenha123');
  67 |         await page.selectOption('#registerRole', 'seller');
  68 |         await page.fill('#storeName', 'Minha Loja de Teste');
  69 |         await page.click('#registerBtn');
  70 | 
  71 |         // Recomendado: Validar se apareceu mensagem de sucesso ou modal antes de prosseguir
  72 |         await page.click('text=Voltar para login');
  73 | 
  74 |         await page.fill('#email', emailLojista);
  75 |         await page.fill('#password', 'LojistaSenha123');
  76 |         await page.click('#loginBtn');
  77 |         await expect(page).toHaveURL(/.*painel/);
  78 |     });
  79 | });
```