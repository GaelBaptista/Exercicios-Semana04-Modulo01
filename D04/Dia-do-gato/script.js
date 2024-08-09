function cadastrarGato(event) {
  event.preventDefault();

  const nome = document.getElementById("catName").value;
  const idade = document.getElementById("catAge").value;
  const descricao = document.getElementById("catDescription").value;
  const url = document.getElementById("catImage").value;
  const cor = document.getElementById("catColor").value;

  const gato = {
    nome: nome,
    idade: idade,
    descricao: descricao,
    foto: url,
    cor: cor,
  };

  localStorage.setItem("perfil", JSON.stringify(gato));
  console.log(gato);
}

document.getElementById("catForm").addEventListener("submit", cadastrarGato);

function alterarImage(event) {
  const valorUrl = event.srcElement.value;
  document.getElementById("catImagePreview").src = valorUrl;
  document.getElementById("catImagePreview").style.borderRadius = "50%";
}
document.getElementById("catImae").addEventListener("input", alterarImage);
