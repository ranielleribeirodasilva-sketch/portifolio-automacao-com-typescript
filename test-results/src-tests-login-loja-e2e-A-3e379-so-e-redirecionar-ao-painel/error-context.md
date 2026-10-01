# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/login-loja-e2e.spec.ts >> ATO 2 - Caminho feliz >> Validar acesso e redirecionar ao painel
- Location: src/tests/login-loja-e2e.spec.ts:23:9

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
- generic [active] [ref=f1e1]:
  - generic [ref=f1e4]:
    - link "Skip to main content" [ref=f1e5] [cursor=pointer]:
      - /url: "#main-content"
    - generic [ref=f1e8]:
      - link "Skip to content" [ref=f1e9] [cursor=pointer]:
        - /url: "#main-content"
      - banner "Main" [ref=f1e12]:
        - generic [ref=f1e13]:
          - navigation "Header logo and title" [ref=f1e14]:
            - list [ref=f1e15]:
              - listitem [ref=f1e16]:
                - link "Github Home" [ref=f1e17] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=f1e23]:
                - link "Docs home" [ref=f1e24] [cursor=pointer]:
                  - /url: /en
                  - generic [ref=f1e25]: GitHub Docs
          - generic [ref=f1e27]:
            - generic [ref=f1e28]: "Select your plan:"
            - 'button "Select your plan: Free, Pro, & Team" [ref=f1e30] [cursor=pointer]':
              - generic [ref=f1e31]: Free, Pro, & Team
          - generic [ref=f1e38]:
            - button "Search or ask Copilot" [ref=f1e40] [cursor=pointer]:
              - generic [ref=f1e45]: /
            - 'button "Select language: current language is English" [ref=f1e49] [cursor=pointer]':
              - generic [ref=f1e53]: English
            - link "Sign up" [ref=f1e62] [cursor=pointer]:
              - /url: https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs
    - generic [ref=f1e65]:
      - generic [ref=f1e67]:
        - button "Collapse sidebar" [expanded] [ref=f1e69] [cursor=pointer]
        - navigation "Breadcrumb" [ref=f1e75]:
          - list [ref=f1e76]:
            - listitem [ref=f1e77]:
              - link "Home" [ref=f1e78] [cursor=pointer]:
                - /url: /en
            - listitem [ref=f1e79]:
              - generic "GitHub Pages"
      - generic [ref=f1e80]:
        - navigation [ref=f1e82]:
          - heading [level=2] [ref=f1e84]:
            - link "GitHub Pages" [ref=f1e85] [cursor=pointer]:
              - /url: /en/pages
          - region "Page navigation content" [ref=f1e86]:
            - navigation "Product sidebar" [ref=f1e89]:
              - list [ref=f1e90]:
                - listitem [ref=f1e91]:
                  - link "Quickstart" [ref=f1e93] [cursor=pointer]:
                    - /url: /en/pages/quickstart
                - listitem [ref=f1e96]:
                  - button "Get started" [ref=f1e98] [cursor=pointer]
                - listitem [ref=f1e103]:
                  - button "Set up site with Jekyll" [ref=f1e105] [cursor=pointer]
                - listitem [ref=f1e110]:
                  - button "Configure a custom domain" [ref=f1e112] [cursor=pointer]
        - generic [ref=f1e117]:
          - main [ref=f1e118]:
            - generic [ref=f1e119]:
              - generic [ref=f1e123]:
                - heading "GitHub Pages documentation" [level=1] [ref=f1e124]
                - paragraph [ref=f1e127]: GitHub Pages turns any GitHub repository into a live website—no separate hosting required.
                - generic [ref=f1e129]:
                  - link "Quickstart" [ref=f1e130] [cursor=pointer]:
                    - /url: /pages/quickstart
                  - link "Overview" [ref=f1e132] [cursor=pointer]:
                    - /url: /pages/getting-started-with-github-pages/what-is-github-pages
              - generic [ref=f1e136]:
                - generic [ref=f1e137]:
                  - heading "Articles" [level=2] [ref=f1e138]
                  - generic [ref=f1e139]:
                    - 'button "Category: All categories" [ref=f1e142] [cursor=pointer]':
                      - generic [ref=f1e146]:
                        - generic [ref=f1e147]: "Category:"
                        - generic [ref=f1e148]: All categories
                    - textbox "Search articles" [ref=f1e155]
                - generic [ref=f1e156]:
                  - generic [ref=f1e158]:
                    - generic [ref=f1e159]: Learn about GitHub Pages
                    - heading [level=3] [ref=f1e162]:
                      - link "About custom domains and GitHub Pages" [ref=f1e163] [cursor=pointer]:
                        - /url: /en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
                    - paragraph [ref=f1e164]: GitHub Pages supports using custom domains, or changing the root of your site's URL from the default, like octocat.github.io, to any domain you own.
                  - generic [ref=f1e166]:
                    - generic [ref=f1e167]: Learn about GitHub Pages
                    - heading [level=3] [ref=f1e170]:
                      - link "About GitHub Pages and Jekyll" [ref=f1e171] [cursor=pointer]:
                        - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
                    - paragraph [ref=f1e172]: Jekyll is a static site generator with built-in support for GitHub Pages.
                  - generic [ref=f1e174]:
                    - generic [ref=f1e175]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e178]:
                      - link "About Jekyll build errors for GitHub Pages sites" [ref=f1e179] [cursor=pointer]:
                        - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites
                    - paragraph [ref=f1e180]: If Jekyll encounters an error building your GitHub Pages site locally or on GitHub, you'll receive an error message with more information.
                  - generic [ref=f1e182]:
                    - generic [ref=f1e183]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e186]:
                      - link "Adding a theme to your GitHub Pages site using Jekyll" [ref=f1e187] [cursor=pointer]:
                        - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
                    - paragraph [ref=f1e188]: You can personalize your Jekyll site by adding and customizing a theme.
                  - generic [ref=f1e190]:
                    - generic [ref=f1e191]: Managing a GitHub Pages site
                    - heading [level=3] [ref=f1e194]:
                      - link "Adding content to your GitHub Pages site using Jekyll" [ref=f1e195] [cursor=pointer]:
                        - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll
                    - paragraph [ref=f1e196]: You can add a new page or post to your Jekyll site on GitHub Pages.
                  - generic [ref=f1e198]:
                    - generic [ref=f1e199]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e202]:
                      - link "Configuring a publishing source for your GitHub Pages site" [ref=f1e203] [cursor=pointer]:
                        - /url: /en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
                    - paragraph [ref=f1e204]: You can configure your GitHub Pages site to publish when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site.
                  - generic [ref=f1e206]:
                    - generic [ref=f1e207]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e210]:
                      - link "Creating a custom 404 page for your GitHub Pages site" [ref=f1e211] [cursor=pointer]:
                        - /url: /en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
                    - paragraph [ref=f1e212]: You can display a custom 404 error page when people try to access nonexistent pages on your site.
                  - generic [ref=f1e214]:
                    - generic [ref=f1e215]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e218]:
                      - link "Creating a GitHub Pages site" [ref=f1e219] [cursor=pointer]:
                        - /url: /en/pages/getting-started-with-github-pages/creating-a-github-pages-site
                    - paragraph [ref=f1e220]: You can create a GitHub Pages site in a new or existing repository.
                  - generic [ref=f1e222]:
                    - generic [ref=f1e223]: Set up a GitHub Pages site
                    - heading [level=3] [ref=f1e226]:
                      - link "Creating a GitHub Pages site with Jekyll" [ref=f1e227] [cursor=pointer]:
                        - /url: /en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
                    - paragraph [ref=f1e228]: You can use Jekyll to create a GitHub Pages site in a new or existing repository.
                - generic [ref=f1e229]:
                  - generic [ref=f1e230]: Showing 1-9 of 24
                  - navigation "Pagination" [ref=f1e231]:
                    - generic [ref=f1e232]:
                      - button "Previous Page" [disabled] [ref=f1e233]:
                        - generic [ref=f1e234]: Previous
                      - button "Page 1" [ref=f1e238] [cursor=pointer]:
                        - generic [ref=f1e239]: "1"
                      - button "Page 2" [ref=f1e241] [cursor=pointer]:
                        - generic [ref=f1e242]: "2"
                      - button "Page 3..." [ref=f1e244] [cursor=pointer]:
                        - generic [ref=f1e245]: "3"
                      - button "Next Page" [ref=f1e247] [cursor=pointer]:
                        - generic [ref=f1e248]: Next
          - contentinfo [ref=f1e253]:
            - generic [ref=f1e257]:
              - link "GitHub" [ref=f1e258] [cursor=pointer]:
                - /url: https://github.com
              - button "Back to top" [ref=f1e262] [cursor=pointer]
            - generic [ref=f1e270]:
              - heading "Help and support" [level=2] [ref=f1e271]
              - generic [ref=f1e272]:
                - generic [ref=f1e274]:
                  - heading "Was this Doc helpful?" [level=3] [ref=f1e275]
                  - radiogroup "Was this Doc helpful?" [ref=f1e276]:
                    - radio "Yes" [ref=f1e277]
                    - generic [ref=f1e278] [cursor=pointer]: "Yes"
                    - radio "No" [ref=f1e279]
                    - generic [ref=f1e280] [cursor=pointer]: "No"
                - generic [ref=f1e282]:
                  - heading "Help us make GitHub Docs great!" [level=3] [ref=f1e283]
                  - paragraph [ref=f1e284]: All Docs are open source. See something that's wrong or unclear? Submit a pull request.
                  - link "Make a contribution" [ref=f1e285] [cursor=pointer]:
                    - /url: https://github.com/github/docs/blob/main/content/pages/index.md
                - generic [ref=f1e287]:
                  - heading "Still need help?" [level=3] [ref=f1e288]
                  - generic [ref=f1e289]:
                    - link "Ask the GitHub community" [ref=f1e290] [cursor=pointer]:
                      - /url: https://github.com/orgs/community/discussions
                    - link "Contact support" [ref=f1e291] [cursor=pointer]:
                      - /url: https://support.github.com
                    - link "Expert services" [ref=f1e292] [cursor=pointer]:
                      - /url: https://services.github.com
                    - link "Blog" [ref=f1e293] [cursor=pointer]:
                      - /url: https://github.blog
            - paragraph [ref=f1e298]:
              - generic [ref=f1e299]:
                - generic [ref=f1e300]: GitHub Inc. © 2026
                - generic [ref=f1e301]:
                  - link "Terms" [ref=f1e302] [cursor=pointer]:
                    - /url: /en/site-policy/github-terms/github-terms-of-service
                  - link "Privacy" [ref=f1e303] [cursor=pointer]:
                    - /url: /en/site-policy/privacy-policies/github-privacy-statement
                  - link "Status" [ref=f1e304] [cursor=pointer]:
                    - /url: https://www.githubstatus.com/
                  - link "Pricing" [ref=f1e305] [cursor=pointer]:
                    - /url: https://github.com/pricing
  - alert [ref=f1e306]
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
  14 |         await expect(page.locator('#email')).toBeVisible();
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
> 25 |         await page.fill('#email', 'user@system.com');
     |                    ^ Error: page.fill: Test timeout of 30000ms exceeded.
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