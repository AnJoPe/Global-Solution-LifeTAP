document.addEventListener("DOMContentLoaded", () => {
    const opcoes = document.querySelectorAll(".escolha-emergencia");
    const mensagemDiv = document.getElementById("mensagem-simulacao");

    var timeout_sumir

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", () => {
            clearTimeout(timeout_sumir);

            let servico = index === 0 ? "Polícia" : "Bombeiros";

            mensagemDiv.textContent = `Simulação de chamada para ${servico} realizada com sucesso.`;
            mensagemDiv.classList.remove("escondido");

            
            timeout_sumir = setTimeout(() => {
                mensagemDiv.classList.add("escondido");
            }, 5000);
        });
    });
});
