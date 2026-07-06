const API_URL = 'http://localhost:3000'; 

const msgSucesso = document.getElementById('mensagem-sucesso');
const msgErro = document.getElementById('mensagem-erro');
const listaAvisos = document.getElementById('lista-avisos');

function mostrarErro(mensagem) {
    msgErro.textContent = mensagem;
    msgErro.classList.remove('oculta');
    msgSucesso.classList.add('oculta');
}

function mostrarSucesso(mensagem) {
    msgSucesso.textContent = mensagem;
    msgSucesso.classList.remove('oculta');
    msgErro.classList.add('oculta');
}

function limparMensagens() {
    msgErro.classList.add('oculta');
    msgSucesso.classList.add('oculta');
}

// ==========================================
// OPERAÇÃO GET: Listar Avisos do Servidor
// ==========================================
async function carregarAvisos() {
    try {
        limparMensagens();
        const resposta = await fetch(`${API_URL}/avisos`);
        
        if (!resposta.ok) throw new Error(); 

        const avisos = await resposta.json();
        listaAvisos.innerHTML = ''; 

        if (avisos.length === 0) {
            listaAvisos.innerHTML = '<li class="aviso-vazio">Nenhum aviso encontrado no servidor.</li>';
            return;
        }

        avisos.forEach(aviso => {
            const li = document.createElement('li');
            li.className = 'item-aviso';
            li.innerHTML = `<strong>${aviso.titulo}:</strong> ${aviso.mensagem}`;
            listaAvisos.appendChild(li);
        });

    } catch (error) {
        mostrarErro('O servidor não respondeu. Verifique se o back-end está ativo.');
        listaAvisos.innerHTML = '<li class="aviso-erro">Falha ao conectar com o servidor.</li>';
    }
}

document.getElementById('btn-atualizar').addEventListener('click', carregarAvisos);


// ==========================================
// OPERAÇÃO POST: Enviar Usuário para o Back-End
// ==========================================
document.getElementById('form-usuario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nomeInput = document.getElementById('nome-usuario');

    try {
        limparMensagens();
        const resposta = await fetch(`${API_URL}/usuarios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nomeInput.value })
        });

        if (!resposta.ok) throw new Error();

        const dadosRetornados = await resposta.json();
        mostrarSucesso(`Usuário cadastrado com sucesso! ID: ${dadosRetornados.id || 'Confirmado'}`);
        nomeInput.value = '';

    } catch (error) {
        mostrarErro('Não foi possível enviar o usuário. Servidor fora do ar ou indisponível.');
    }
});


// ==========================================
// OPERAÇÃO POST: Enviar Tarefa para o Back-End
// ==========================================
document.getElementById('form-tarefa').addEventListener('submit', async (e) => {
    e.preventDefault();
    const tarefaInput = document.getElementById('titulo-tarefa');

    try {
        limparMensagens();
        const resposta = await fetch(`${API_URL}/tarefas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descricao: tarefaInput.value })
        });

        if (!resposta.ok) throw new Error();

        mostrarSucesso(`Tarefa enviada e gravada com sucesso!`);
        tarefaInput.value = '';

    } catch (error) {
        mostrarErro('Não foi possível salvar a tarefa. Falha na resposta do servidor.');
    }
});

carregarAvisos();