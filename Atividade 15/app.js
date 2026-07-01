const express = require('express');
const app = express();
app.use(express.json());

let db = { usuarios: [], tarefas: [] };

app.get('/:tipo', (req, res) => res.json(db[req.params.tipo] || []));
app.get('/:tipo/:id', (req, res) => {
    const item = db[req.params.tipo]?.find(i => i.id === parseInt(req.params.id));
    item ? res.json(item) : res.status(404).send('Não encontrado');
});
app.post('/:tipo', (req, res) => {
    const novo = { id: Date.now(), ...req.body };
    db[req.params.tipo]?.push(novo);
    res.status(201).json(novo);
});
app.patch('/:tipo/:id/nome', (req, res) => {
    const item = db[req.params.tipo]?.find(i => i.id === parseInt(req.params.id));
    if (item) item.nome = req.body.nome;
    item ? res.json(item) : res.status(404).send('Não encontrado');
});
app.delete('/:tipo/:id', (req, res) => {
    db[req.params.tipo] = db[req.params.tipo]?.filter(i => i.id !== parseInt(req.params.id));
    res.status(200).send('Excluído');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
