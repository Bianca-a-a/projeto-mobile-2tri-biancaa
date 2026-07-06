const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "sua_chave_secreta_super_segura";

const usuarios = [
  { id: 1, email: "joao@email.com", senha: "123" }
];

let tokensAtivos = new Set();

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ mensagem: "E-mail ou senha inválidos" });
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: '1h' });
  tokensAtivos.add(token);

  res.json({ token });
});

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Acesso negado. Token não fornecido." });
  }

  if (!tokensAtivos.has(token)) {
    return res.status(401).json({ mensagem: "Sessão inválida ou expirada." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensagem: "Token inválido." });
    }
    req.usuario = decoded; 
    next();
  });
};

app.get('/tarefas', verificarToken, (req, res) => {
  res.json({
    mensagem: "Acesso autorizado às tarefas!",
    tarefas: ["Estudar Node.js", "Revisar código do middleware", "Criar interface bonita"]
  });
});

app.post('/logout', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    tokensAtivos.delete(token);
  }

  res.json({ mensagem: "Logout realizado com sucesso" });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
