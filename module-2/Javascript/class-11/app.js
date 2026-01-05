/**
 * Professional Multiplication Table Generator
 * Senior Frontend Engineer Implementation
 */

// DOM Elements
const tableContainer = document.getElementById('table-container');
const numberInput = document.getElementById('tableNumber');
const lengthInput = document.getElementById('tableLength');

/**
 * Generates and renders the multiplication table
 */
function generateTable() {
    const tableNum = Number(numberInput.value);
    const tableLen = Number(lengthInput.value);

    if (!tableNum || !tableLen) {
        alert("Please enter valid numbers");
        return;
    }

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Expression</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
    `;

    for(let i = 1; i <= tableLen; i++) {
        // Add staggered animation delay via inline style
        const delay = i * 0.05;
        tableHTML += `
            <tr style="animation-delay: ${delay}s">
                <td>${tableNum} × ${i}</td>
                <td>${tableNum * i}</td>
            </tr>
        `;
    }

    tableHTML += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}

// Initial generation on load
document.addEventListener('DOMContentLoaded', generateTable);

// Allow "Enter" key to trigger generation
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generateTable();
    }
});



    