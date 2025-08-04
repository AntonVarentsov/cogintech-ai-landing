import { Taskmaster } from 'taskmaster';

/**
 * Агент-специалист по фреймворку Astro
 * Предоставляет экспертные знания и автоматизацию для разработки на Astro
 */
export class AstroAgent {
  private taskmaster: Taskmaster;

  constructor(taskmaster: Taskmaster) {
    this.taskmaster = taskmaster;
  }

  /**
   * Создание нового Astro компонента
   */
  async createAstroComponent(name: string, type: 'page' | 'component' | 'layout' = 'component') {
    const componentPath = this.getComponentPath(name, type);
    const template = this.generateComponentTemplate(name, type);
    
    await this.taskmaster.createFile(componentPath, template);
    
    if (type === 'page') {
      await this.updateAstroConfig(name);
    }
    
    return componentPath;
  }

  /**
   * Оптимизация Astro проекта
   */
  async optimizeProject() {
    const optimizations = [
      this.optimizeImages(),
      this.optimizeCSS(),
      this.optimizeJavaScript(),
      this.configureSSG(),
      this.setupViewTransitions()
    ];

    await Promise.all(optimizations);
  }

  /**
   * Настройка SEO для Astro страниц
   */
  async setupSEO(pageName: string, metadata: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  }) {
    const seoComponent = this.generateSEOComponent(metadata);
    await this.taskmaster.createFile(`src/components/seo/${pageName}SEO.astro`, seoComponent);
  }

  /**
   * Создание API роутов
   */
  async createAPIRoute(name: string, methods: ('GET' | 'POST' | 'PUT' | 'DELETE')[]) {
    const apiPath = `src/pages/api/${name}.ts`;
    const apiTemplate = this.generateAPITemplate(name, methods);
    
    await this.taskmaster.createFile(apiPath, apiTemplate);
    return apiPath;
  }

  /**
   * Настройка интеграций Astro
   */
  async setupIntegrations(integrations: string[]) {
    const config = await this.taskmaster.readFile('astro.config.mjs');
    const updatedConfig = this.addIntegrationsToConfig(config, integrations);
    
    await this.taskmaster.updateFile('astro.config.mjs', updatedConfig);
    
    // Установка пакетов
    for (const integration of integrations) {
      await this.taskmaster.runCommand(`npm install @astrojs/${integration}`);
    }
  }

  /**
   * Генерация TypeScript типов для Astro
   */
  async generateTypes() {
    const typesTemplate = `
/// <reference types="astro/client" />

declare module '*.astro' {
  const Component: any;
  export default Component;
}

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
`;

    await this.taskmaster.createFile('src/env.d.ts', typesTemplate);
  }

  /**
   * Создание лейаута
   */
  async createLayout(name: string, slots: string[] = ['default']) {
    const layoutPath = `src/layouts/${name}.astro`;
    const layoutTemplate = this.generateLayoutTemplate(name, slots);
    
    await this.taskmaster.createFile(layoutPath, layoutTemplate);
    return layoutPath;
  }

  /**
   * Диагностика проекта Astro
   */
  async diagnoseProject(): Promise<{
    performance: string[];
    seo: string[];
    accessibility: string[];
    bestPractices: string[];
  }> {
    const issues = {
      performance: [],
      seo: [],
      accessibility: [],
      bestPractices: []
    };

    // Проверка производительности
    if (!(await this.taskmaster.fileExists('astro.config.mjs'))) {
      issues.performance.push('Отсутствует конфигурационный файл Astro');
    }

    // Проверка SEO
    const pages = await this.taskmaster.globFiles('src/pages/**/*.astro');
    for (const page of pages) {
      const content = await this.taskmaster.readFile(page);
      if (!content.includes('<title>')) {
        issues.seo.push(`Страница ${page} не содержит тега <title>`);
      }
    }

    return issues;
  }

  private getComponentPath(name: string, type: string): string {
    switch (type) {
      case 'page':
        return `src/pages/${name}.astro`;
      case 'layout':
        return `src/layouts/${name}.astro`;
      default:
        return `src/components/${name}.astro`;
    }
  }

  private generateComponentTemplate(name: string, type: string): string {
    const componentName = name.charAt(0).toUpperCase() + name.slice(1);
    
    switch (type) {
      case 'page':
        return `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="${componentName}">
  <main>
    <h1>${componentName}</h1>
    <p>Добро пожаловать на страницу ${componentName}</p>
  </main>
</Layout>

<style>
  main {
    margin: auto;
    padding: 1rem;
    width: 800px;
    max-width: calc(100% - 2rem);
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1em;
  }
</style>`;

      case 'layout':
        return `---
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Astro приложение" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  html {
    font-family: system-ui, sans-serif;
  }
</style>`;

      default:
        return `---
export interface Props {
  title?: string;
  class?: string;
}

const { title, class: className } = Astro.props;
---

<div class:list={["${name.toLowerCase()}", className]}>
  {title && <h2>{title}</h2>}
  <slot />
</div>

<style>
  .${name.toLowerCase()} {
    /* Стили компонента ${componentName} */
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
</style>`;
    }
  }

  private generateSEOComponent(metadata: any): string {
    return `---
export interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

const {
  title = "${metadata.title}",
  description = "${metadata.description}",
  keywords = ${JSON.stringify(metadata.keywords || [])},
  ogImage = "${metadata.ogImage || ''}"
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!-- Основные мета-теги -->
<title>{title}</title>
<meta name="description" content={description} />
{keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
{ogImage && <meta property="og:image" content={ogImage} />}

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
{ogImage && <meta property="twitter:image" content={ogImage} />}`;
  }

  private generateAPITemplate(name: string, methods: string[]): string {
    const methodHandlers = methods.map(method => `
export async function ${method}({ params, request }: APIContext) {
  try {
    // Логика для ${method} запроса
    return new Response(JSON.stringify({ 
      message: "${method} запрос обработан успешно",
      data: null 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: "Ошибка при обработке ${method} запроса" 
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}`).join('\n');

    return `import type { APIContext } from 'astro';

${methodHandlers}`;
  }

  private generateLayoutTemplate(name: string, slots: string[]): string {
    const slotTags = slots.map(slot => 
      slot === 'default' ? '<slot />' : `<slot name="${slot}" />`
    ).join('\n  ');

    return `---
export interface Props {
  title?: string;
  class?: string;
}

const { title, class: className } = Astro.props;
---

<div class:list={["${name.toLowerCase()}-layout", className]}>
  {title && <h1>{title}</h1>}
  ${slotTags}
</div>

<style>
  .${name.toLowerCase()}-layout {
    /* Стили лейаута ${name} */
  }
</style>`;
  }

  private addIntegrationsToConfig(config: string, integrations: string[]): string {
    // Простая реализация для добавления интеграций в конфиг
    const integrationImports = integrations.map(int => `import ${int} from '@astrojs/${int}';`).join('\n');
    const integrationList = integrations.join(', ');
    
    return config.replace(
      /import.*from.*;/g,
      `$&\n${integrationImports}`
    ).replace(
      /integrations:\s*\[([^\]]*)\]/,
      `integrations: [$1, ${integrationList}]`
    );
  }

  private async optimizeImages() {
    // Настройка оптимизации изображений
    await this.setupIntegrations(['image']);
  }

  private async optimizeCSS() {
    // Настройка оптимизации CSS
    await this.setupIntegrations(['compress']);
  }

  private async optimizeJavaScript() {
    // Настройка минификации JavaScript
    await this.setupIntegrations(['compress']);
  }

  private async configureSSG() {
    // Настройка статической генерации
    const config = `
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});`;
    
    await this.taskmaster.updateFile('astro.config.mjs', config);
  }

  private async setupViewTransitions() {
    // Настройка View Transitions API
    await this.setupIntegrations(['view-transitions']);
  }

  private async updateAstroConfig(pageName: string) {
    // Обновление конфигурации при создании новой страницы
    console.log(`Создана новая страница: ${pageName}`);
  }
}

export default AstroAgent;