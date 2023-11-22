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