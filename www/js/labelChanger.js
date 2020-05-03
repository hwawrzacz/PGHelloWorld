const label = document.querySelector('#label_value');
const button = document.querySelector('#button_change');
let currentMode = 'INCREMENT';

button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    let currentValue = parseInt(label.innerHTML);

    currentValue == 10 ? currentMode = 'DECREMENT' : {};
    currentValue == 0 ? currentMode = 'INCREMENT' : {};
    currentMode == 'INCREMENT' ? currentValue++ : currentValue--;

    label.innerHTML = currentValue;
});