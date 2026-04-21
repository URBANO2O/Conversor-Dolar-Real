function converter() {
  let valor = document.getElementById("valorDolar").value;

  if (valor === "") {
    alert("Digite um valor!");
    return;
  }

  let cotacao = 5.00;

  let resultado = valor * cotacao;

  document.getElementById("resultado").innerText =
    "R$ " + resultado.toFixed(2);
}