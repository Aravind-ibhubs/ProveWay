let activeContainer
let otherElement 
let tableElement
let inactiveTableList

function getContainer(value) {
    if(value === "Pair1") {
        activeContainer = "Pair-container-1"
        otherElement = ["Pair-container-2", "Pair-container-3"]
        tableElement = "Pair-Table-1"
        inactiveTableList = ["Pair-Table-2", "Pair-Table-3"]
    } else if (value === "Pair2") {
        activeContainer = "Pair-container-2"
        otherElement = ["Pair-container-1", "Pair-container-3"]
        tableElement = "Pair-Table-2"
        inactiveTableList = ["Pair-Table-1", "Pair-Table-3"]
    } else {
        activeContainer = "Pair-container-3"
        otherElement = ["Pair-container-1", "Pair-container-2"]
        tableElement = "Pair-Table-3"
        inactiveTableList = ["Pair-Table-2", "Pair-Table-1"]
    }
    
    addContent()
}

function addContent() {
    let activeElement = document.getElementById(activeContainer);
    let tableContainer = document.getElementById(tableElement);

    activeElement.classList.add("high-lighted-box");
    tableContainer.style.display = "block";
    
    for (let container of otherElement) {
        let inactiveContainer = document.getElementById(container);
        inactiveContainer.classList.remove('high-lighted-box');
    }

    for (let table of inactiveTableList) {
        let inactiveTable = document.getElementById(table);
        inactiveTable.style.display = "none";
    }
}