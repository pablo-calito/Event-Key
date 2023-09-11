const letterDisplay = document.getElementById('letterDisplay');
const letterNumberDisplay = document.getElementById('letterNumberDisplay');
const eventCodeDisplay = document.getElementById('eventCodeDisplay');

document.addEventListener('keydown', function(event) {
    const key = event.key; 
    const keyCode = event.keyCode;
    const eventCode = event.code; 

    
    letterDisplay.textContent = key;
    letterNumberDisplay.textContent = keyCode;
    eventCodeDisplay.textContent = eventCode;
});

