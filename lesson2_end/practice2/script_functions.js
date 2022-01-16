
//1.Напишите функцию max(a,b), которая возвращает наибольшее из чисел a и b.

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

//console.log(max(100, 11));




//2.Написать функцию, которая вычисляет среднее арифметическое элементов , переданных ей в качестве аргументов. Пусть будет передано 3 аргумента.


// function numAverage(num1, num2, num3) {
//     var result = (num1 + num2 + num3) / arguments.length;
//     return result;
// }

//console.log(numAverage(5, 10, 15));



//3.Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x, n) {
//     return x ** n;
// }
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));
// console.log(pow(4, 3));




// var func = function (a, b) {
//     return a + b;
// }
// console.log(func(2, 2));

// var func = function (a, b) => a + b;
// console.log(func(5, 5));

// let double = n => n*2;
// console.log(double(3));

// let sayHi = () => console.log(('hello!'));
// sayHi();
var friend = { name: 'Владимир', age: 25 };
// console.log(friend.age);
// console.log('name' in friend)
// delete friend.name
// console.log(friend)