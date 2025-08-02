# Explana Pulse Launch

[![Build, Tag e Deploy Explanageral Pulse](https://github.com/tamandua-devs/explana-pulse-launch/actions/workflows/deploy.yml/badge.svg)](https://github.com/tamandua-devs/explana-pulse-launch/actions/workflows/deploy.yml)

## Descrição do Projeto

Este projeto é uma aplicação web desenvolvida com tecnologias modernas para fornecer uma interface de usuário responsiva e interativa. Ele utiliza React, TypeScript e Tailwind CSS, com suporte adicional de bibliotecas como shadcn-ui para componentes de UI.

## Tecnologias Utilizadas

- **Vite**: Ferramenta de build rápida para desenvolvimento web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **shadcn-ui**: Conjunto de componentes de UI acessíveis e reutilizáveis.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
src/
├── assets/          # Recursos estáticos como imagens
├── components/      # Componentes reutilizáveis
│   ├── ui/          # Componentes de UI (botões, tabelas, etc.)
├── hooks/           # Hooks personalizados
├── lib/             # Funções utilitárias
├── pages/           # Páginas principais da aplicação
├── App.css          # Estilos globais
├── App.tsx          # Componente principal da aplicação
├── main.tsx         # Ponto de entrada da aplicação
```

## Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd explana-pulse-launch
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:5173`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Configuração do Tailwind CSS

O arquivo de configuração do Tailwind está localizado em `tailwind.config.ts`. Ele define temas personalizados, extensões e plugins utilizados no projeto.

## Configuração do TypeScript

O projeto utiliza múltiplos arquivos de configuração do TypeScript:
- `tsconfig.json`: Configuração base.
- `tsconfig.app.json`: Configuração específica para a aplicação.
- `tsconfig.node.json`: Configuração para scripts Node.js.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Descrição da alteração"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento em [tamandua-devs](mailto:tamandua-devs@example.com).