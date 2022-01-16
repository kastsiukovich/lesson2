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


var array = [267, 306, 108];
var largest = Math.max.apply(Math, array); // 306
console.log(largest);


var arr = [1, 2, 3, 4];

var largest = arr.reduce(function (x, y) {
   return (x > y) ? x : y;
});

console.log(largest);