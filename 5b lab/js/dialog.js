// dialog 

    function openDialog(dialogId) {
        var dialog = document.getElementById(dialogId);
        if (dialog) {
            dialog.showModal();
        }
    }

    function closeDialog(dialogId) {
        var dialog = document.getElementById(dialogId);
        if (dialog) {
            dialog.close();
        }
    }

// 1 calc dialog 2

    function calculateTriangle() {
        const side1Value = parseFloat(document.getElementById('side1').value);
        const side2Value = parseFloat(document.getElementById('side2').value);
        const side3Value = parseFloat(document.getElementById('side3').value);
        if (isNaN(side1Value) || isNaN(side2Value) || isNaN(side3Value)) {
            alert('Помилка #001. Введіть довжину.');
            return;
        }
        const triangleArea = calculateTriangleArea(side1Value, side2Value, side3Value);
        displayResult(triangleArea);
    }

    function calculateTriangleArea(side1, side2, side3) {
        const s = (side1 + side2 + side3) / 2;
        const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        return area;
    }

    function displayResult(result) {
        const resultElement = document.getElementById('r1');
        resultElement.textContent = 'Площа трикутника: ' + result;
}

// 2 calc dialog 1 

    function r2displayTriangleResult(result) {
        const r2resultElement = document.getElementById('r2');
        r2resultElement.textContent = 'Площа трикутника: ' + result;
    }

    function calculateTriangle2() {
        const r2side1Value = parseFloat(document.getElementById('triangleSide1').value);
        const r2side2Value = parseFloat(document.getElementById('triangleSide2').value);
        const r2angleValue = parseFloat(document.getElementById('triangleAngle').value);
        if (isNaN(r2side1Value) || isNaN(r2side2Value) || isNaN(r2angleValue)) {
            alert('Помилка #002. Введіть довжину або сторону.');
            return;
        }
        const angleInRadians = (r2angleValue * Math.PI) / 180;
        const r2triangleArea = r2calculateTriangleArea(r2side1Value, r2side2Value, angleInRadians);
        r2displayTriangleResult(r2triangleArea);
    }
    function r2calculateTriangleArea(side1, side2, angleInRadians) {
        const area = 0.5 * side1 * side2 * Math.sin(angleInRadians);
        return area;
    }

// 3 calc dialog 3

    function r3displayTriangleResult(result) {
        const r3resultElement = document.getElementById('r3');
        r3resultElement.textContent = 'Площа трикутника: ' + result;
    }

    function calculateTriangle3() {
        const r3side1Value = parseFloat(document.getElementById('r3side1').value);
        const r3side2Value = parseFloat(document.getElementById('r3side2').value);
        const r3angleValue = parseFloat(document.getElementById('r3side3').value);
        if (isNaN(r3side1Value) || isNaN(r3side2Value) || isNaN(r3angleValue)) {
            alert('Помилка #003. Введіть довжину або висоту.');
            return;
        }

        const radians = (r3angleValue * Math.PI) / 180; // Переведення градусів в радіани
        const ploshcha = 0.5 * r3side1Value * r3side2Value * Math.sin(radians);

        r3displayTriangleResult(ploshcha);
    }

// 4 calc dialog 4

    function r4displayTriangleResult(result) {
        const r4resultElement = document.getElementById('r4');
        r4resultElement.textContent = 'Площа трикутника: ' + result;
    }

    function calculateTriangle4() {
        const r4side1Value = parseFloat(document.getElementById('r4side1').value);
        const r4side2Value = parseFloat(document.getElementById('r4side2').value);
        const r4angleValue = parseFloat(document.getElementById('r4side3').value);
        if (isNaN(r4side1Value) || isNaN(r4side2Value) || isNaN(r4angleValue)) {
            alert('Помилка #004. Введіть довжину або радіус.');
            return;
        }
        const s = (r4side1Value + r4side2Value + r4angleValue) / 2;
        const rozva = Math.sqrt(s* (s-r4side1Value)* (s-r4side2Value) * (s-r4angleValue));
        const r4radius = (r4angleValue * r4side1Value * r4side2Value) / (4 * rozva);
        r4displayTriangleResult(rozva);

    }

// 5 calc dialog 5

function isPalindrome(number) {
    const numStr = String(number);
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

function calculatePalindrome() {
    const r5side1Value = document.getElementById('r5side1').value;
    if (!r5side1Value) {
        alert('Помилка #005. Введіть число.');
        return;
    }
    const inputNumber = parseInt(r5side1Value, 10);
    const resultElement = document.getElementById('r5');
    if (isPalindrome(inputNumber)) {
        resultElement.textContent = inputNumber + ' є паліндромом.';
    } else {
        resultElement.textContent = inputNumber + ' не є паліндромом.';
    }
}

// 6 calc dialog 6
function calcword() {
    const inputWord = document.getElementById("r6word").value;
    const result = canFormNewWord(inputWord);
    document.getElementById("r6").innerText = result;
}

function canFormNewWord(word) {
        const sortedOriginal = word.toLowerCase().split('').sort().join('');
        const sorteds = "привіт".split('').sort().join('');

        return sortedOriginal === sorteds ? "Можна" : "Не можна";
}

// 7 calc dialog 7 

function fibo() {
    const inputElement = document.getElementById('r7num');
    const resultElement = document.getElementById('r7');
    const n = parseInt(inputElement.value);

    if (!isNaN(n) && n >= 0) {
        const fibonacciNumber = calculateFibonacci(n);
        resultElement.textContent = "Число Фібоначчі: " + fibonacciNumber;
    } else {
        resultElement.textContent = "Будь ласка, введіть додатне ціле число.";
    }
}

function calculateFibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }
}