# Projeto Angular - CRUD de Alunos

Sistema de cadastro de alunos (CRUD) desenvolvido em Angular v20, com formulários reativos, roteamento, validações e persistência via API (json-server).

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Angular CLI instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```
- json-server instalado globalmente:
  ```bash
  npm install -g json-server
  ```

## Como rodar o projeto

### 1. Instale as dependências

Na pasta do projeto:
```bash
npm install
```

### 2. Suba a API fake (json-server)

Em um terminal, na raiz do projeto (onde está o arquivo `db.json`):
```bash
json-server --watch db.json --port 3000
```

A API ficará disponível em `http://localhost:3000`.

### 3. Suba o projeto Angular

Em **outro** terminal:
```bash
ng serve
```

Acesse `http://localhost:4200` no navegador.

> **Importante:** os dois comandos (`json-server` e `ng serve`) precisam ficar rodando ao mesmo tempo, em terminais separados, enquanto você usa o sistema.

## Funcionalidades

- Cadastro, edição, listagem e exclusão de alunos
- Validação de campos (matrícula única, formato de nome, faixa de idade)
- Confirmação antes de excluir um aluno
- Estilização com Sass (SCSS)

## Tecnologias

- Angular v20 (standalone components, Signals, Reactive Forms)
- Angular Router
- RxJS / HttpClient
- SCSS
- json-server (API fake para desenvolvimento)