let listaDeAmigos = [];

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  if (amigo.trim() !== "") {
    listaDeAmigos.push(amigo);
    exibirTextoNaTela();
  }else{
    alert("Nome digitado invalido!")
  }
  document.querySelector("input").value = "";
}

function exibirTextoNaTela() {
  let lista = document.querySelector("ul");
  lista.innerHTML = "";
  listaDeAmigos.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo(){
  
}