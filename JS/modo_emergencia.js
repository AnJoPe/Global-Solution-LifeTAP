document.addEventListener("DOMContentLoaded", () => {
    const opcoes = document.querySelectorAll(".escolha-emergencia");
    const mensagemDiv = document.getElementById("mensagem-simulacao");

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", () => {
            let servico = index === 0 ? "Polícia" : "Bombeiros";

            mensagemDiv.textContent = `Simulação de chamada para ${servico} realizada com sucesso.`;
            mensagemDiv.classList.remove("escondido");

            setTimeout(() => {
                mensagemDiv.classList.add("escondido");
            }, 7000);
        });
    });
});
