// Espera o HTML carregar para garantir que os botões existam
document.addEventListener("DOMContentLoaded", () => {
  const btnCalcular = document.getElementById("btnCalcular");
  const btnLimpar = document.getElementById("btnLimpar");

  btnCalcular.addEventListener("click", calcularMedia);
  btnLimpar.addEventListener("click", limparCampos);
});

function lerNota(id) {
  const valor = document.getElementById(id).value;

  // Trata vazio
  if (valor === "" || valor === null) return NaN;

  // parseFloat para aceitar decimais
  return parseFloat(valor);
}

function notaValida(n) {
  return Number.isFinite(n) && n >= 0 && n <= 10;
}

function setResultado(html, tipo) {
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("ok", "erro", "aviso");
  if (tipo) resultado.classList.add(tipo);
  resultado.innerHTML = html; // regra do enunciado: usar innerHTML [1](https://onedrive.live.com?cid=BC2A3E91EEF6AD96&id=BC2A3E91EEF6AD96!sce81791fb0f04f579f31a4f6f53e1bb6)
}

function calcularMedia() {
  const atv1 = lerNota("atv1");
  const prova1 = lerNota("prova1");
  const n2 = lerNota("n2");
  const atv2 = lerNota("atv2");
  const prova2 = lerNota("prova2");

  // Validação: todos preenchidos + entre 0 e 10 [1](https://onedrive.live.com?cid=BC2A3E91EEF6AD96&id=BC2A3E91EEF6AD96!sce81791fb0f04f579f31a4f6f53e1bb6)
  const todasValidas =
    notaValida(atv1) &&
    notaValida(prova1) &&
    notaValida(n2) &&
    notaValida(atv2) &&
    notaValida(prova2);

  if (!todasValidas) {
    setResultado("⚠️ Preencha TODOS os campos com números entre 0 e 10.", "aviso");
    return;
  }

  // Cálculos conforme enunciado [1](https://onedrive.live.com?cid=BC2A3E91EEF6AD96&id=BC2A3E91EEF6AD96!sce81791fb0f04f579f31a4f6f53e1bb6)
  const n1 = (atv1 + prova1) / 2;
  const n3 = (atv2 + prova2) / 2;
  const media = (n1 + n2 + n3) / 3;

  const situacao = media >= 7 ? "Aprovado ✅" : "Reprovado ❌"; // regra da aprovação [1](https://onedrive.live.com?cid=BC2A3E91EEF6AD96&id=BC2A3E91EEF6AD96!sce81791fb0f04f579f31a4f6f53e1bb6)
  const tipo = media >= 7 ? "ok" : "erro";

  setResultado(
    `N1: ${n1.toFixed(2)} | N2: ${n2.toFixed(2)} | N3: ${n3.toFixed(2)}<br>` +
    `Média Semestral: <strong>${media.toFixed(2)}</strong><br>` +
    `Situação: <strong>${situacao}</strong>`,
    tipo
  );
}

function limparCampos() {
  document.getElementById("formNotas").reset();
  setResultado("", null);

  // (opcional) foca no primeiro campo para facilitar novo preenchimento
  document.getElementById("atv1").focus();
}