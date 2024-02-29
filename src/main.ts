import { getNumberOfGrades, getSumGrades, getAverageValue, getPassingGrades, getFailingGrades, getRaisedGrades } from "./classroom";

// Function to update the statistics table
function updateStatsTable(grades: number[]): void {
    const numberOfGrades = getNumberOfGrades(grades);
    const sumGrades = getSumGrades(grades);
    const averageGrade = getAverageValue(grades);
    const passingGrades = getPassingGrades(grades).length;
    const failingGrades = getFailingGrades(grades).length;
    const raisedGrades = getRaisedGrades(grades);

    // Update the first stats table
    const statsTableBody = document.querySelector("#stats-table tbody");
    if (statsTableBody) {
        statsTableBody.innerHTML = `
            <tr>
                <td>${numberOfGrades}</td>
                <td>${sumGrades}</td>
                <td>${averageGrade.toFixed(2)}</td>
            </tr>
        `;
    }

    // Update the second stats table
    const statsTable2Body = document.querySelector("#stats-table2 tbody");
    if (statsTable2Body) {
        statsTable2Body.innerHTML = `
            <tr>
                <td>${passingGrades}</td>
                <td>${failingGrades}</td>
                <td>${raisedGrades.join(', ')}</td>
            </tr>
        `;
    }
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();
    
    const gradeInput = document.querySelector<HTMLInputElement>("#your-grade");
    if (gradeInput) {
        const grade = parseInt(gradeInput.value);
        if (!isNaN(grade) && grade >= 0 && grade <= 20) {
            const grades: number[] = JSON.parse(localStorage.getItem("grades") || "[]");
            grades.push(grade);
            localStorage.setItem("grades", JSON.stringify(grades));
            updateStatsTable(grades);
            gradeInput.value = "";
        } else {
            alert("Please enter a valid grade between 0 and 20.");
        }
    }
}

// Initialize the application
function init(): void {
    const grades: number[] = JSON.parse(localStorage.getItem("grades") || "[]");
    updateStatsTable(grades);

    const form = document.querySelector("#grades-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
}

init();
