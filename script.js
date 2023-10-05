let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateFactorial() {
    try {
        const value = parseFloat(displayValue);
        if (value >= 0 && Number.isInteger(value)) {
            let result = 1;
            for (let i = 2; i <= value; i++) {
                result *= i;
            }
            displayValue = result;
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Invalid Input';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateTrigFunction(func) {
    try {
        const value = parseFloat(displayValue);
        if (!isNaN(value)) {
            if (func === 'sin') {
                displayValue = Math.sin(value * (Math.PI / 180));
            } else if (func === 'cos') {
                displayValue = Math.cos(value * (Math.PI / 180));
            } else if (func === 'tan') {
                displayValue = Math.tan(value * (Math.PI / 180));
            }
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Invalid Input';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquare() {
    try {
        const value = parseFloat(displayValue);
        if (!isNaN(value)) {
            displayValue = Math.pow(value, 2);
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Invalid Input';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        const value = parseFloat(displayValue);
        if (!isNaN(value) && value >= 0) {
            displayValue = Math.sqrt(value);
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Invalid Input';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateLog() {
    try {
        const value = parseFloat(displayValue);
        if (!isNaN(value) && value > 0) {
            displayValue = Math.log10(value);
            document.getElementById('display').value = displayValue;
        } else {
            document.getElementById('display').value = 'Invalid Input';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
