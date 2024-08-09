function carregarDados() {
  const dados = JSON.parse(localStorage.getItem("perfil"));
  document.getElementById("nome").innerTex = dados.nome;
  document.getElementById("img").innerTex = dados.url;
}

window.onload = carregarDados;
