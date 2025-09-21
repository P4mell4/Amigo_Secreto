let amigos = [];


function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let ul = document.querySelector("#listaAmigos");
    let resultado = document.querySelector("#resultado");

    
    resultado.innerHTML = "";

    let conteudo = input.value.trim();

    //vazio
    if (conteudo === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    amigos.push(conteudo);

    
    input.value = "";

    // atualiza lista
    atualizarLista();
}

// atualizar a lista na tela
function atualizarLista() {
    let ul = document.querySelector("#listaAmigos");

    // limpa lista antes
    ul.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.querySelector("#resultado");

    // validação: precisa ter amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos 1 amigo para sortear");
        return;
    }

    //índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);

    let sorteado = amigos[indice];

    resultado.innerHTML = `<strong>O amigo sorteado foi: ${sorteado}</strong>`;
}
