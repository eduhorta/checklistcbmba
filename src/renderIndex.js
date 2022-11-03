document.querySelectorAll('[wm-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')
    const urlPath = link.getAttribute('wm-nav')

    link.onclick = function(e) {
        e.preventDefault()

        fetch(urlPath)
            .then(resp => resp.text())
            .then((html) => {
                conteudo.innerHTML = html

                if (urlPath.match(/requerimento\.html$/gi)) {
                    applyDropDown();
                } else if (urlPath.match(/anexo\.html$/gi)) {
                    applyDropDown();
                }
            })
    }
})

function applyDropDown() {
let categorias = { 
    residencial:["A-1 - Habitação unifamiliar", "A-2 - Habitação multifamiliar", "A-3 - Habitação coletiva"],
    hospedagem:["B-1 - Hotel e assemelhado", "B-2 - Hotel Residencial"],
    comercial:["C-1 - Comércio com baixa carga de incêndio"],
    servico:["D-1 - Local para prestação de serviço", "D-4 - Laboratórios de análises clínicas"],
    educacao:["E-1 - Escola em geral", "E-3 - Espaço para cultura física"],
    saude:["H-6 - Clínica e consultório médico e odontológico"]
};

let main = document.getElementById('divisao');
let sub = document.getElementById('ocupacao');

main.addEventListener('change', function() {

    let selected_option = categorias[this.value];

    while(sub.options.length > 0) {
        sub.options.remove(0);
    }
    Array.from(selected_option).forEach(function(el) {
        let option = new Option(el, el);

        sub.appendChild(option);
    });

})};