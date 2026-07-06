# Sistema de Avisos

Este é um sistema para cadastro, visualização e controle de avisos informativos. O projeto foi estruturado de forma organizada, separando claramente as responsabilidades de interface, lógica de servidor e armazenamento de dados.

## Arquitetura do Projeto

O projeto está dividido em três grandes blocos:
1. **frontend/**: Contém toda a interface visual que o usuário interage, construída em HTML puro, CSS e JavaScript.
2. **backend/**: Contém a lógica de programação do servidor, rotas da API e controle de dados.
3. **docs/**: Pasta atual, destinada aos manuais e explicações do sistema.

---

## Localização dos Componentes Críticos

### Onde fica o Servidor?
O servidor principal do sistema fica localizado na raiz da pasta do backend:
* **Caminho:** `backend/server.js`
* **Função:** Ele é o "motor" do sistema. É este arquivo que o programador deve executar para ligar a API, escutar as requisições do navegador e gerenciar a comunicação com o banco de dados temporário.

### Onde fica a Tela de Login?
A página visual onde o usuário digita suas credenciais de acesso fica guardada na pasta de interfaces:
* **Caminho:** `frontend/html/login.html`
* **Função:** Contém o formulário visual de entrada. Ela carrega o arquivo de estilo `frontend/css/login.css` para ficar bonita e utiliza o script `frontend/js/login.js` para enviar os dados digitados até o servidor.
