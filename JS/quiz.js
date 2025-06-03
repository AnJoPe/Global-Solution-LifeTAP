const questionario = document.getElementById("questionario-selector");

var botao_enviar;
var span_erro_quiz;

const perguntas_quiz = [
    {
        nome: "Queimadura Leve",
        explicacao:
            "Qual é a primeira coisa que você deve fazer em uma queimadura leve?",
        opcoes: [
            "Passar manteiga ou óleo na queimadura para parar o ardor.",
            "Colocar gelo diretamente sobre a queimadura para esfriá-la.",
            "Deixar a queimadura sob água corrente fria para amenizar o espalhamento dela.",
            "Cobrir e apertar a queimadura com um pano seco para impedir que germes entrem nela.",
        ],
        resposta: 2 //Começa do 0 os indices das respostas
    },
    {
        nome: "Corte com Sangramento",
        explicacao:
            "Em um corte com sangramento, o que você deve fazer primeiro?",
        opcoes: [
            "Assoprar o corte para aliviar a dor.",
            "Lavar o corte com vinagre para matar as bactérias.",
            "Lavar os arredores do corte com água, sabão e muito cuidado.",
            "Lavar as mãos para não sujar o corte.",
        ],
        resposta: 3 //Começa do 0 os indices das respostas
    },
    {
        nome: "Desmaio",
        explicacao:
            "Caso você ver alguém desmaiar, o que você deve fazer primeiro?",
        opcoes: [
            "Deitar a pessoa de lado para evitar sufocamento.",
            "Dar um copo de água para a pessoa não ficar desidratada.",
            "Sacudir a pessoa para ela acordar rapidamente.",
            "Fazê-la ingerir um doce para aumentar o nível de açúcar no sangue dela.",
        ],
        resposta: 0 //Começa do 0 os indices das respostas
    },
    {
        nome: "Engasgo",
        explicacao:
            "Caso testemunhe um engasgamento, como você deve ajudar a vítima?",
        opcoes: [
            "Esperar a pessoa tossir sozinha para ela mesma se desengasgar.",
            "Fazer a manobra de Heimlich para ajudá-la a expelir a comida.",
            "Deitar a pessoa no chão para fazê-lá engolir a comida.",
            "Fazê-lá ingerir água para ajudá-la a engolir a comida.",
        ],
        resposta: 1 //Começa do 0 os indices das respostas
    },
    {
        nome: "Itens do Kit",
        explicacao:
            "Qual dos seguintes itens é ESSENCIAL num kit de primeiros-socorros?",
        opcoes: [
            "Fita métrica.",
            "Controle Remoto.",
            "Gazes.",
            "Pilhas.",
        ],
        resposta: 2 //Começa do 0 os indices das respostas
    },
];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < perguntas_quiz.length; i++) {

        var questao_atual = document.createElement('div');
        questao_atual.setAttribute('class', "questao");

        var titulo_questao = document.createElement('h2');
        titulo_questao.innerText = perguntas_quiz[i].nome;
        titulo_questao.setAttribute('class', "titulo-questao");
        questao_atual.appendChild(titulo_questao);

        var explicacao_questao = document.createElement('p');
        explicacao_questao.innerText = perguntas_quiz[i].explicacao;
        explicacao_questao.setAttribute('class', "explicacao-questao");
        questao_atual.appendChild(explicacao_questao);

        var wrapper_respostas_questao = document.createElement('div');
        wrapper_respostas_questao.setAttribute('class', "respostas-questao");

        for (let j = 0; j < perguntas_quiz[i].opcoes.length; j++) {
            var opcao_atual = document.createElement('button');
            opcao_atual.innerText = perguntas_quiz[i].opcoes[j];
            opcao_atual.setAttribute('class', 'opcao-questao');

            // Associar evento de clique
            opcao_atual.addEventListener('click', (e) => {
                const botaoClicado = e.target;
                const container = botaoClicado.parentElement; // .respostas-questao

                // Remover seleção anterior
                Array.from(container.children).forEach(btn => {
                    btn.classList.remove('opcao-questao-selecionada');
                });

                // Adicionar nova seleção
                botaoClicado.classList.add('opcao-questao-selecionada');
            });

            wrapper_respostas_questao.appendChild(opcao_atual);
        }

        questao_atual.appendChild(wrapper_respostas_questao);
        questionario.appendChild(questao_atual);
    }

    // Finalização
    const wrapper_finalizar = document.createElement('div');
    wrapper_finalizar.setAttribute('class', 'wrapper-terminar-questionario');
    questionario.appendChild(wrapper_finalizar);

    const botao_resetar = document.createElement('button');
    botao_resetar.innerText = "Reiniciar Quiz";
    botao_resetar.setAttribute('class', 'resetar-questionario');
    wrapper_finalizar.appendChild(botao_resetar);

    const botao_terminar = document.createElement('button');
    botao_terminar.innerText = "Terminar Quiz";
    botao_terminar.setAttribute('class', 'terminar-questionario');
    botao_terminar.setAttribute('id', 'enviar-quiz-selector');
    wrapper_finalizar.appendChild(botao_terminar);

    const span_erro = document.createElement('span');
    span_erro.innerText = "Você deve responder a todas as questões!";
    span_erro.setAttribute('class', 'span-erro-questionario');
    span_erro.setAttribute('id', 'span-quiz-selector');
    span_erro.style.visibility = 'hidden';
    questionario.appendChild(span_erro);

    // Evento para finalizar o quiz
    botao_terminar.addEventListener('click', () => {
        const todas_questoes = document.querySelectorAll('.questao');
        let todasRespondidas = true;

        todas_questoes.forEach((questao, index) => {
            const selecionada = questao.querySelector('.opcao-questao-selecionada');
            if (!selecionada) {
                todasRespondidas = false;
            }
        });

        if (!todasRespondidas) {
            span_erro.style.visibility = 'visible';
            return;
        } else {
            span_erro.style.visibility = 'hidden';
        }

        // Verificação das respostas
        todas_questoes.forEach((questao, index) => {
            const botoes = questao.querySelectorAll('.opcao-questao');
            botoes.forEach((botao, i) => {
                botao.classList.remove('opcao-questao-correta', 'opcao-questao-errada');

                if (i === perguntas_quiz[index].resposta) {
                    botao.classList.add('opcao-questao-correta');
                }

                if (
                    botao.classList.contains('opcao-questao-selecionada') &&
                    i !== perguntas_quiz[index].resposta
                ) {
                    botao.classList.add('opcao-questao-errada');
                }
            });
        });
    });

    // Evento para resetar o quiz
    botao_resetar.addEventListener('click', () => {
        document.querySelectorAll('.opcao-questao').forEach(btn => {
            btn.classList.remove(
                'opcao-questao-selecionada',
                'opcao-questao-correta',
                'opcao-questao-errada'
            );
        });

        span_erro.style.visibility = 'hidden';
    });
});