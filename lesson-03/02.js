// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let remainder = num % 2 
    if (remainder === 0){
        return  true
    } else {
        return false
    }
}
