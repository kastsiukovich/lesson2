
// let str = 'привет';
// console.log(str.toUpperCase());

// let str = "Привет";
// str.test = 5; // (*)
// alert(str.test);

// alert(+2); // NaN

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(2e10);
// console.log(3e-3);
// console.log(Math.max(5, 3, -20, 100));
// console.log(Math.min(6, 100, -2));
// console.log(Math.pow(4, 2));

// var a = Number(prompt('Введите лючое число', ''));
// var b = Number(prompt('Введите еще одно число', ''));
// console.log(a + b);

// function readNumber() {
//     let num;
//     do {
//         num = prompt("Введите число", 0);
//     } while (!isFinite(num));
//     if (num === null || num === '') return null;
//     return +num;
// }
// alert(`Число: ${readNumber()}`);

// let arr = [5, 8, true, 30, 500, 'houm'];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr.length);

// arr[1] = false;
// console.log(arr);
// arr[6] = 'hello';
// console.log(arr);
// console.log(arr.length);
// arr[7] = { name: 'djoe' };
// console.log(arr);
// console.log(arr.length);
// console.log(arr[5]);
// arr[8] = 'door';
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.push('Яблоко');
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (arr of arr) {
//     console.log(arr);
// }
// console.log(arr.length);
// arr.length = 3;
// console.log(arr);

// console.log(arr.length = 0);
// console.log(arr);


// let fruits = ['Apple', 'grusha', 'appelsin'];
// let shoppingCart = fruits;
// shoppingCart.push('banan');
// console.log(shoppingCart);
// console.log(shoppingCart.length);


// let styles = ['Джаз', 'Блюз'];
// styles.push('рок-н-ролл');
// styles[1] = 'Классика';
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('Рэгги');
// styles.unshift('Рэп');
// console.log(styles);

// let arr = ['a', 'b'];
// arr.push(function () {
//     console.log(this);
// });
// arr[2]();

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt('Введите число', 0);
//         if (value === '' || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumInput());

//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.
/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */
//Обратите внимание, что num также включено в возвращаемый массив.

// function arrayOfMultiples(num, length1) {
//     var arr = [];
//     for (var i = 0; i < length1; i++) {
//         arr.push(num * (arr.length + 1)) // arr.push(num * (i + 1))
//     }
//     return arr;
// }

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));


//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */

function numberSplit(num1) {
    var arrResult = [];
    if (num1 % 2 === 0) {
        arrResult.push(num1 / 2);
        arrResult.push(num1 / 2);
    } else {
        var firstOperand = (num1 / 2) - 0.5;
        var secondOperand = (num1 / 2) + 0.5;
        arrResult.push(firstOperand);
        arrResult.push(secondOperand);
    }
    return arrResult;
}

// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9));





// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number


// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string




//Task1. Напишите функцию, которая для каждого элемента массива добавлять +1 к текущему числу.

/* incrementElements([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementElements([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementElements([-1, -2, -3, -4]) ➞ [0, -1, -2, -3] */


// function incrementElements(arr) {
//    for (var element = 0; element < arr.length; element++) {
//       // arr[element] = arr[element + 1];
//       // arr[element]++;
//       arr[element] += 1;
//    }
//    return arr;
// }
// console.log(incrementElements([0, 1, 2, 3]));
// console.log(incrementElements([2, 4, 6, 8]));
// console.log(incrementElements([-1, -2, -3, -4]));

//Вариянт 2
// function incrementElements(arr) {
//    var array = [0, 1, 2, 3];
//    array[0] += 1;
//    array[1] += 1;
//    array[2] += 1;
//    array[3] += 1;

//    return array;
// }
// console.log(incrementElements());



// Task2. Напишите функцию для отображения массива в обратном порядке.


// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []


// function reverse(arr) {
//    var arrResult = [];

//    for (var i = arr.length - 1; i >= 0; i--) {
//       arrResult.push(arr[i]);
//    }
//    return arrResult;
// }
// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

// function reverse(arr1) {
//    var reversed = arr1.reverse();
//    return arr1;
// }
// console.log(reverse([1, 2, 3, 4]));


// Task3. Создайте функцию, которая принимает два массива и вставляет второй массив в середину первого массива.

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]


// function tuckIn(arr1, arr2) {
//    var lastElement = arr1[1];
//    arr1.pop();
//    for (var i = 0; i < arr2.length; i++) {
//       arr1.push(arr2[i]);
//    }
//    arr1.push(lastElement);
//    return arr1;
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15, 150], [45, 75, 35]));
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

//* Первый массив всегда состоит из двух элементов.


//hw 2-1
function convertElements(arr) {
    var arr3 = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
        arr3.push(arr[i]);
    }
    return arr3
}

// console.log(convertElements([1, 2, "x", "z"]));
// console.log(convertElements(["pdf", 123, "def", 456]));
// console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
// console.log(convertElements([]));


//hw 2-2
function numericTrue(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            arr2.push(arr[i]);
        }
    }
    return arr2.length;
}
// console.log(numericTrue([true, false, false, true, false]));
// console.log(numericTrue([false, false, false, false]));
// console.log(numericTrue([]));


//hw2-3
// function highLow(num) {
//    var maxMinMumber = [];
//    // var max;
//    // var min;
//    for (var i = 0; i < num.length; i++) {

//       maxMinMumber.push(num[i]);
//    }
//    return maxMinMumber;
// }

function highLow(num) {
    // var maxMinNum = [maxNumber, minNumber];
    // maxNum.push(Math.max(1, 2, 3, 4, 5));
    // maxNum.push(Math.min(1, 2, 3, 4, 5));
    // maxNum.push(Math.max(1, 2, -3, 4, 5));
    // maxNum.push(Math.min(1, 2, -3, 4, 5));
    // maxNum.push(Math.max(1, 9, 3, 4, -5));
    // maxNum.push(Math.min(1, 9, 3, 4, -5));
    // maxNum.push(Math.max(13));
    // maxNum.push(Math.min(13));

    for (var i = 0; i < num.length; i++) {

        var maxNumber = Math.max.apply(Math, num);
        var minNumber = Math.min.apply(Math, num);
        // maxNum.push(Math.max.apply(Math, num[i]));
        // maxMinNum.push(maxNumber);
        // maxMinNum.push(minNumber);
        // // maxMinNum.pop();
        // var num;
        // var maxNumber = Math.max(...num);
        // var minNumber = Math.min(...num);
        // maxMinNum.push(maxNumber);
        // maxMinNum.push(minNumber);
        // maxMinNum.push(Math.max(num[i]));
        // maxMinNum.push(Math.min(num[i]));
        var maxMinNum = [maxNumber, minNumber];
    }
    return maxMinNum;
}
// console.log(highLow([1, 2, 3, 4, 5]));
// console.log(highLow([1, 2, -3, 4, 5]));
// console.log(highLow([1, 9, 3, 4, -5]));
// console.log(highLow([13]));


// var array = [267, 306, 108];
// var largest = Math.max.apply(Math, array); // 306
// console.log(largest);


// var arr = [1, 2, 3, 4];

// var largest = arr.reduce(function (x, y) {
//     return (x > y) ? x : y;
// });

// console.log(largest);