document.getElementById("submit").addEventListener("click", function () {
  const resultado = somar();
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});

function somar() {
  const numero1 = parseFloat(document.getElementById("inputNumero1").value);
  const numero2 = parseFloat(document.getElementById("inputNumero2").value);

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  return numero1 + numero2;
}
