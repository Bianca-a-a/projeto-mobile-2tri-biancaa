{
    "exercicio_1"; {
      "metodo"; "GET",
      "exemplos"; [
        "Acessar a página inicial de um portal de notícias",
        "Visualizar os detalhes de um produto em um e-commerce"
      ]
    };
    "exercicio_2"; {
      "metodo"; "POST",
      "exemplos"; [
        "Enviar um formulário de contato com nome e e-mail",
        "Fazer o login enviando usuário e senha"
      ]
    };
    "exercicio_3"; {
      "status_404"; "'Não Encontrado'. O navegador pediu um caminho que não existe no servidor."
    };
    "exercicio_4"; {
      "status_201"; "'Criado'. O servidor avisa que recebeu os dados e salvou o novo registro."
    };
    "exercicio_5"; {
      "request"; "POST /avisos HTTP/1.1\nHost: localhost:3000\nContent-Type: application/json\n\n{\n  \"titulo\": \"Feriado\",\n  \"conteudo\": \"Não terá aula na sexta.\"\n}",
      "response"; "HTTP/1.1 201 Created\nContent-Type: application/json\n\n{\n  \"mensagem\": \"Aviso criado com sucesso\"\n}"
    }
  }
  