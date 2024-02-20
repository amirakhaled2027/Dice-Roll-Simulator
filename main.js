const diceStone = document.getElementById('dice');
const button = document.getElementById('roll-button');
const rollHistory = document.getElementById('roll-history');

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceStone.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistory.innerHTML = "";
    for( i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistory.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1: 
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3: 
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5: 
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

button.addEventListener("click", () => {
    diceStone.classList.add("roll-animation");
    setTimeout(
        () => {
            diceStone.classList.remove("roll-animation");
            rollDice();},
            1000);
});
 