const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/avisos', (req, res) => {
  const aviso = req.body;
  res.status(201).json({ mensagem: 'Aviso recebido com sucesso!', dados: aviso });
});

app.post('/tarefas', (req, res) => {
  const tarefa = req.body;
  res.status(201).json({ mensagem: 'Tarefa cadastrada com sucesso!', dados: tarefa });
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', dados: usuario });
});

app.post('/reservas', (req, res) => {
  const reserva = req.body;
  res.status(201).json({ mensagem: 'Reserva realizada com sucesso!', dados: reserva });
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('--------------------------------------------------');

  try {
    const objetoTeste = {
      nome: "Ana Silva",
      email: "ana@email.com",
      idade: 28
    };

    const response = await fetch(`http://localhost:${PORT}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objetoTeste)
    });

    const resultado = await response.json();
    console.log('Executando teste automático pós-inicialização...');
    console.log('Resposta do Servidor:', resultado);
  } catch (error) {
    console.log('Não foi possível rodar o teste automático:', error.message);
  }
});
