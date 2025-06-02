const lista_cards = document.getElementsByClassName('card-emergencia');
const section_checklist = document.getElementById('section-checklist');

for(let i = 0; i < lista_cards.length; i++){
    lista_cards[i].addEventListener('click', () => {
        lista_cards[i].classList.toggle('card-emergencia-selecionado');

        const todosSelecionados = Array.from(lista_cards).every((item_lista) => {
            return item_lista.classList.contains('card-emergencia-selecionado');
        });

        if(todosSelecionados){
            section_checklist.className = "conteudo-checklist conteudo-todo-selecionado";
        }
        else {
            section_checklist.className = "conteudo-checklist";
        }
    })
}