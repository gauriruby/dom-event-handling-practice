// Function to change the button color on click
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show the message on mouseover
function showMessage(event) {
    const messageId = event.target.id.replace('button', 'message');
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'block';
}

// Function to hide the message on mouseout
function hideMessage(event) {
    const messageId = event.target.id.replace('button', 'message');
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'none';
}

// Function to hide the button on double-click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
    button.addEventListener('mouseover', showMessage);
    button.addEventListener('mouseout', hideMessage);
    button.addEventListener('dblclick', hideButton);
});
