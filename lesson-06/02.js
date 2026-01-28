/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

// function map(array, callback) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let result = callback(array[i], i)

//     newArray.push(result)
//   }

//   return newArray
// }

// const numbers = [2, 5, 6, 17];

// const myMap = numbers.map(number => {
//   switch (number) {
//     case 2:
//       return { name: 'artkey' };
//     case 5:
//       return { name: 'hell' };
//     case 6:
//       return { name: 'viacha' };
//     default:
//       return { name: "хз" }
//   }
// })

// console.log(myMap);

// const maps = map(numbers, (number, index) => {
//   switch (number) {
//     case 2:
//       return { name: 'artkey' };
//     case 5:
//       return { name: 'hell' };
//     case 6:
//       return { name: 'viacha' };
//     default:
//       return { name: "хз" }
//   }
// })


// console.log(maps);




const elem = ['123', 'qaz', 'cvb', '456']

function map(array, callback) {
  let nextArray = [];
  console.log('start');
  
  for (let i = 0; i < array.length; i++) {
    let resultat = callback(array[i], i); // возвращает измененые элемент за один проход цикла 
    nextArray.push(resultat) 
    console.log('midl');
  }
  console.log('fin');
  return nextArray
  }


const pam = map(elem, (str, index) => {
  if (index === 2) {
    return str.toUpperCase()
  } else {
    return str + " - " + index
  }
}) 


console.log(pam);






















