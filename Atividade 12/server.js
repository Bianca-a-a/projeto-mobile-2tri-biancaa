const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({ status: 'Sistema ativo e operando' });
});

router.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com' },
    { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com' }
  ];
  res.status(200).json(usuarios);
});

router.get('/tarefas', (req, res) => {
  const tarefas = [
    { id: 101, titulo: 'Revisar código', concluida: false },
    { id: 102, titulo: 'Atualizar documentação', concluida: true }
  ];
  res.status(200).json(tarefas);
});

router.get('/reservas', (req, res) => {
  const reservas = [
    { id: 501, sala: 'Sala A', data: '2026-06-30', hora: '14:00' },
    { id: 502, sala: 'Auditório', data: '2026-07-02', hora: '09:00' }
  ];
  res.status(200).json(reservas);
});

router.get('/turmas', (req, res) => {
  const turmas = ['Turma A - Desenvolvimento de Sistemas', 'Turma B - Banco de Dados', 'Turma C - Computação Gráfica'];
  res.status(200).json(turmas);
});

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(` Servidor rodando com sucesso!`);
  console.log(` Acesse em: http://localhost:${PORT}/status`);
});

module.exports = router;
