const correctNumber = [6, 5, 4, 9];
const form = document.getElementById('numberForm');
const message = document.getElementById('message');
const inputField = document.getElementById('guess');

inputField.focus();

inputField.addEventListener("blur", (event) => {
    event.target.focus();
});

inputField.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
})

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputField.value.length < 4) {
        inputField.focus();
        return;
    };

    const userInput = inputField.value;
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
        newParagraph.textContent = `>> 56.54321739275542, 10.035217532279528 <<`;
        newParagraph.classList.add("success");
    };
    message.prepend(newParagraph);

    inputField.value = "";
    inputField.focus();
});