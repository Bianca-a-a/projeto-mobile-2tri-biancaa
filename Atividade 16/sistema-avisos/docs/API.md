# Documentação Técnica da API

Este documento descreve como o backend do Sistema de Avisos organiza suas rotas e gerencia as informações dos usuários e das mensagens.

---

## Pasta de Rotas (`backend/src/routes/`)
Esta pasta serve para organizar os caminhos (endereços) que o front-end pode acessar para conversar com o servidor. Cada arquivo aqui dentro cuida de um assunto específico:
* **`rotaAuth.js`**: Cuida do endereço de login (ex: `/api/login`).
* **`rotaAvisos.js`**: Cuida dos endereços para listar ou criar novos avisos (ex: `/api/avisos`).

---

## Pasta de Dados em Memória (`backend/src/memory/`)
Como o sistema não utiliza um banco de dados tradicional (como MySQL), os dados são salvos temporariamente na memória RAM do computador enquanto o servidor estiver ligado.
* **Como funciona:** Os dados ficam guardados dentro de arquivos JavaScript (Ex: `avisos.js`), estruturados em formato de listas (Arrays).
* **Aviso importante:** Se o servidor for desligado ou reiniciado, os avisos cadastrados nesta pasta serão apagados e voltarão ao estado inicial de fábrica.
