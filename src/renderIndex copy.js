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
                    renderDropdown(categorias, "A - Residencial")
                }
            })
    }
})

let categorias = [
    ["A - Residencial", "A-1 - Habitação unifamiliar"],
    ["A - Residencial", "A-2 - Habitação multifamiliar"],
    ["A - Residencial", "A-3 - Habitação coletiva"],
    ["B - Serviço de Hospedagem", "B-1 - Hotel e assemelhado"],
    ["B - Serviço de Hospedagem", "B-2 - Hotel Residencial"],
    ["C - Comercial", "C-1 - Comércio com baixa carga de incêndio"],
    ["D - Serviço Profissional", "D-1 - Local para prestação de serviço profissional"],
    ["D - Serviço Profissional", "D-4 - Laboratórios de análises clínicas sem internação"],
    ["E - Educacional e Cultura Física", "E-1 - Escola em geral"],
    ["E - Educacional e Cultura Física", "E-3 - Espaço para cultura física"],
];

function renderDropdown(data, level1Filter) {


    const filteredArray = data.filter(r => r[0] == level1Filter);

    const uniqueOptions = new Set();
    filteredArray.forEach(r => uniqueOptions.add(r[1]));

    const uniqueList = [...uniqueOptions];

    const selectLevel2 = document.getElementById("ocupacao");
    selectLevel2.innerHTML = "";

    uniqueList.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        selectLevel2.appendChild(option);
        
    });
}

function applyDropDown(){
   const selectLevel1Value = document.getElementById("divisao").value;
   renderDropdown(categorias, selectLevel1Value)

}

document.getElementById("divisao").addEventListener("change", applyDropDown());
document.addEventListener("DOMContentLoaded", applyDropDown);