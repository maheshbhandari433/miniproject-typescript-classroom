export function getNumberOfGrades(grades: number[]): number {
    return grades.length;
}

export function getSumGrades(grades: number[]): number {
    return grades.reduce((acc, curr) => acc + curr, 0);
}

export function getAverageValue(grades: number[]): number {
    const sum = getSumGrades(grades);
    const numberOfGrades = getNumberOfGrades(grades);
    return numberOfGrades > 0 ? sum / numberOfGrades : 0;
}

export function getPassingGrades(grades: number[]): number[] {
    return grades.filter(grade => grade >= 10);
}

export function getFailingGrades(grades: number[]): number[] {
    return grades.filter(grade => grade <= 9);
}

export function getRaisedGrades(grades: number[]): number[] {
    return grades.map(grade => Math.min(grade + 1, 20));
}
