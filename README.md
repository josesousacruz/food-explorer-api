# Food Explorer API

Bem-vindo à Food Explorer API, uma API construída com Node.js, Express, Knex, bcrypt e JWT para autenticação. Este projeto fornece endpoints para gerenciar usuários, ingredientes e pratos para o projeto Food Explorer.

## Índice

- [Visão Geral](#visão-geral)
- [Previews](#previews)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
- [Middleware](#middleware)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Links Importantes](#links-importantes)

## Visão Geral

A Food Explorer API é projetada para fornecer uma API RESTful para gerenciar usuários, ingredientes e pratos. Utiliza autenticação JWT para proteger certas rotas e criptografia bcrypt para senhas dos usuários.

## Previews

### Diagrama de Arquitetura
![Diagrama de Arquitetura](./previews/arquitetura.png)

### Fluxo de Autenticação
![Fluxo de Autenticação](./previews/auth-flow.png)

### Exemplo de Resposta de API
![Exemplo de Resposta de API](./previews/api-response.png)

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/josesousacruz/food-explorer-api.git
   cd food-explorer-api
