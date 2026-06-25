const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao Sistema</h1><p>Estamos felizes em ter você aqui.</p>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre o Projeto</h1><p>Este é um sistema automatizado desenvolvido em Node.js para gerenciamento de tarefas e rotas dinâmicas.</p>');
});

app.get('/equipe', (req, res) => {
    res.send('<h1>Nossa Equipe</h1><p>Grupo: Desenvolvedores focados em criar soluções modernas, ágeis e eficientes.</p>');
});

app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1><p>Para dúvidas ou suporte, envie um e-mail para suporte@projeto.com ou abra um chamado.</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso!`);
    console.log(`Acesse em: http://localhost:${PORT}`);
});
