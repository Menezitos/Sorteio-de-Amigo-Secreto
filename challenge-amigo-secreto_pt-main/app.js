let listaDeAmigos = [];
let amigosSorteados = new Set();

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome && !listaDeAmigos.includes(nome)) {
        listaDeAmigos.push(nome);
        console.log(`${nome} adicionado à lista!`);
        input.value = ""; // Limpa o campo de texto após adicionar
    } else {
        alert("Nome já adicionado ou inválido.");
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
       alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }
    
    if (amigosSorteados.size >= listaDeAmigos.length) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }
    
    let sorteado;
    do {
        sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    } while (amigosSorteados.has(sorteado));
    
    amigosSorteados.add(sorteado);

    let resultadoSorteio = document.getElementById("resultado");
    resultadoSorteio.innerHTML += `<p>${sorteado} foi sorteado!</p>`;
    console.log("Amigo sorteado:", sorteado);
}