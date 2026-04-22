function calcularMedia() {
    let atv1 = parseFloat(document.getElementById("atv1").value);
    let prova1 = parseFloat(document.getElementById("prova1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let atv2 = parseFloat(document.getElementById("atv2").value);
    let prova2 = parseFloat(document.getElementById("prova2").value);

    let notas = [atv1, prova1, n2, atv2, prova2];

    // Validação
    for (let i = 0; i < notas.length; i++) {
        if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
            document.getElementById("resultado").innerHTML =
                "⚠️ Preencha todos os campos com notas entre 0 e 10.";
            return;
        }
    }

    let n1 = (atv1 + prova1) / 2;
    let n3 = (atv2 + prova2) / 2;
    let mediaFinal = (n1 + n2 + n3) / 3;

    let situacao = mediaFinal >= 7 ? "✅ Aprovado" : "❌ Reprovado";

    document.getElementById("resultado").innerHTML =
        `Média Semestral: ${mediaFinal.toFixed(2)}<br>${situacao}`;
}