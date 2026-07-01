const usuarios = [
    { id: 1, nome: "Ana Silva", papel: "Aluno", email: "ana.silva@escola.com" },
    { id: 2, nome: "Carlos Souza", papel: "Professor", email: "carlos.souza@escola.com" },
    { id: 3, nome: "Maria Oliveira", papel: "Administrador", email: "maria.oliveira@escola.com" }
  ];

  const avisos = [
    { id: 1, titulo: "Feriado Escolar", mensagem: "Não haverá aula na próxima segunda-feira devido ao feriado.", data: "2026/06/07" },
    { id: 2, titulo: "Feira de Ciências", mensagem: "Inscrições para a Feira de Ciências abertas até sexta-feira.", data: "2026/10/07" },
    { id: 3, titulo: "Semana de Provas", mensagem: "As provas finais do trimestre começam no dia 15.", data: "2026/15/07" },
    { id: 4, titulo: "Reunião de Pais", mensagem: "Reunião de pais e mestres às 19h no auditório.", data: "2026/12/07" }
  ];
  
  const tarefas = [
    { id: 1, disciplina: "Matemática", descricao: "Resolver exercícios da página 45 a 50", prazo: "2026/07/05" },
    { id: 2, disciplina: "História", descricao: "Ler o capítulo 4 e entregar um resumo", prazo: "2026/07/07" },
    { id: 3, disciplina: "Química", descricao: "Entrega do relatório do experimento", prazo: "2026-07/10" }
  ];

  const reservasSala = [
    { id: 1, sala: "Laboratório de Informática", professor: "Carlos Souza", horario: "14:00 - 16:00", data: "2026/07/03" },
    { id: 2, sala: "Auditório", professor: "Maria Oliveira", horario: "09:00 - 11:00", data: "2026/07/08" }
  ];

  console.log("=== USUÁRIOS ===");
  console.table(usuarios);
  
  console.log("\n=== AVISOS ===");
  console.table(avisos);
  
  console.log("\n=== TAREFAS ===");
  console.table(tarefas);
  
  console.log("\n=== RESERVAS DE SALA ===");
  console.table(reservasSala);
  