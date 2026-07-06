function mostrarNome() {
    let nome = document.getElementById("nomeAluno").value;
    document.getElementById("paragrafoNome").innerText = "Nome: " + nome;
}

function adicionarTarefa() {
    let input = document.getElementById("textoTarefa");
    let valor = input.value.trim();
    
    if (valor === "") {
        alert("O campo da tarefa está vazio.");
        return; 
    }

    let item = document.createElement("li");
    item.textContent = valor;
    document.getElementById("listaTarefas").appendChild(item);
    input.value = "";
}

function adicionarAviso() {
    let input = document.getElementById("textoAviso");
    let valor = input.value.trim();
    
    if (valor === "") {
        alert("O campo de aviso está vazio.");
        return; 
    }

    let item = document.createElement("li");
    item.textContent = "!! " + valor;
    document.getElementById("listaAvisos").appendChild(item);
    input.value = "";
}