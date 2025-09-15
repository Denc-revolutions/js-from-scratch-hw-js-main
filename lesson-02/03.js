/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code

switch (score) {
    case (value >= 0 && value <= 49):
        grade = 'F'
        break
    case (value >= 50 && value <= 69):
        grade = 'D'
        break
    case (value >= 70 && value <= 79):
        grade = 'C'
        break
    case (value >= 80 && value <= 89):
        grade = 'B'
        break
    case (value >= 90 && value <= 100):
        grade = 'A'
        break
}