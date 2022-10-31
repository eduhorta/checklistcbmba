let ocupacaoDef = [
    ["A - Residencial", "Habitação unifamiliar"],
    ["A - Residencial", "Habitação multifamiliar"],
    ["A - Residencial", "Habitação coletiva"]
];

const filteredArray = ocupacaoDef.filter(r => r[0] == "A - Residencial");

const uniqueOptions = new Set();
filteredArray.forEach(r => uniqueOptions.add(r[1]));

const uniqueList = [...uniqueOptions];

const selectLevel1 = document.getElementById("ocupacao");

uniqueList.forEach(item => {
    const option = document.createElement("option");
    option.textContent = item;
    selectLevel1.appendChild(option);
});

console.log(filteredArray);
console.log(uniqueList);