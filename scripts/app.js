const correctNumber = [6, 5, 4, 4];
const form = document.getElementById('numberForm');
const message = document.getElementById('message');
const inputField = document.getElementById('guess');

// Disallow more than 4 digits
inputField.addEventListener('input', function () {
    if (inputField.value.length > 4) {
        inputField.value = inputField.value.slice(0, 4);
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const userInput = parseInt(inputField.value, 10);
    const digits = Array.from(String(userInput), Number);

    let correctNumbers = 0;
    const attemptedDigits = [];
    digits.forEach((digit) => {
        if (correctNumber.includes(digit) && !attemptedDigits.includes(digit)) correctNumbers++;
        attemptedDigits.push(digit);
    });

    let correctPlacements = 0;
    digits.forEach((digit, idx) => {
        if (correctNumber[idx] === digit) correctPlacements++;

    });

    const newParagraph = document.createElement('p');
    const textNode = document.createTextNode(`[${userInput}] - ${correctNumbers} tal er rigtige, ${correctPlacements} tal er placeret korrekt.`);
    newParagraph.append(">> ");
    newParagraph.appendChild(textNode);
    if (correctNumbers === 4, correctPlacements === 4) {
        newParagraph.textContent = `>> [${userInput}] - Du fandt tallet!`;
        newParagraph.classList.add("success");
    };
    message.prepend(newParagraph);
});