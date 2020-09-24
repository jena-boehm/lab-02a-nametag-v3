// import functions and grab DOM elements
const myName = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

// set event listeners to update state and DOM
nameButton.addEventListener('click', () => {
    // GET the input's value
    const userInput = nameInput.value;
    console.log(userInput);
    // SET the name's textContent to that value (defined outcome -- validate that it happened)
    myName.textContent = userInput;

    // clear the input
    nameInput.value = '';
});

