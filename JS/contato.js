const formulario = document.getElementById('formulario-contato');

const input_nome = document.getElementById('input-nome');
const label_nome = document.getElementById('label-nome');

const input_email = document.getElementById('input-email');
const label_email = document.getElementById('label-email');

const input_assunto = document.getElementById('input-assunto');
const label_assunto = document.getElementById('label-assunto');

const input_corpo = document.getElementById('input-mensagem');
const label_corpo = document.getElementById('label-corpo');

const botao_formulario = document.getElementById('form-input-submit');

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function resetInput(input) {
    switch (input) {
        case "input-nome":
            input_nome.className = "form-input-default"
            input_nome.placeholder = ""
            break;
        
        case "input-email":
            input_email.className = "form-input-default"
            input_email.placeholder = ""
            break;
        
        case "input-assunto":
            input_assunto.className = "form-input-default"
            input_assunto.placeholder = ""
            break;
        
        case "input-corpo":
            input_corpo.className = "form-input-default"
            input_corpo.placeholder = ""
            break;
    }
}

function limparInputs() {
    input_nome.value = "";
    input_email.value = "";
    input_assunto.value = "";
    input_corpo.value = "";
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let form_invalido = false;

    if (input_nome.value.replace(/\s+/g, '').length < 3) {
        input_nome.className = "form-input-default form-input-default-error"
        input_nome.placeholder = "Nome inválido, mínimo de 3 caracteres!"
        input_nome.value = "";

        form_invalido = true;
    }
    if (!validarEmail(input_email.value)) {
        input_email.className = "form-input-default form-input-default-error"
        input_email.placeholder = "Email inválido!"
        input_email.value = "";

        form_invalido = true;
    }
    if (input_assunto.value.length < 3) {
        input_assunto.className = "form-input-default form-input-default-error"
        input_assunto.placeholder = "Assunto inválido, mínimo de 3 caracteres!"
        input_assunto.value = "";

        form_invalido = true;
    }
    if (input_corpo.value.length < 3) {
        input_corpo.className = "form-input-default form-input-default-error"
        input_corpo.placeholder = "Corpo inválido, mínimo de 3 caracteres!"
        input_corpo.value = "";

        form_invalido = true;
    }
    if (form_invalido) {
        return;
    }

    botao_formulario.innerHTML = '<div class="loader"></div>'

    setTimeout(() => {
        const emails = 'pedrohm2709@gmail.com,andrerosacolombo18@gmail.com,jose.diogo100407@gmail.com';
        const assunto = `Email de ${input_nome.value}: ${input_assunto.value}`;
        const corpo = input_corpo.value;
        const enviar_email = `mailto:${emails}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    
        window.open(enviar_email);
    
        botao_formulario.innerHTML = "Enviar Mensagem";
        limparInputs()
    }, 2000)

})