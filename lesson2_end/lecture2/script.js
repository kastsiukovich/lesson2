/* var str = 'Hello';
if ('Hello' === str) {
    console.log('Hello World!');
} else {
    console.log('Hello Max!');
} */


/* var inc = 15;

switch ('Str') {
    case 'Str':
        console.log(inc + 1);
        break;
    case 30:
        console.log(inc + 2);
        break;
    default:
        console.log('Hello inc');
        break;
} */

/* for (var i = 0; i < 20; i += 3) {
    console.log(i);
} */

/* var i = 0;

while (i < 20) {
    console.log(i, 'While cycle');

    i += 3;
} */

/* var i = 0;

do {
    console.log(i, 'do while');
    i += 2;
} while (i < -1) */


/*Function*/
function sum(num1, num2) {
    /* var num1 = 10;
    var num2 = 20; */
    /* console.log(arguments[1]); */
    /* console.log(arguments[0] + arguments[1]); */
    //console.log(num1 + num2);
    return num1 + num2;
}

// console.log(sum(10, 20));
// sum(-100, 50.3);
// sum(1, 2);





var setLikeDislike = function (currentItem) {
    if (currentItem === "like") {
        return "like";
    }
    if (currentItem === "dislike") {
        return "dislike";
    }
}

//console.log(setLikeDislike("dislike"));










/*Array*/

var arr1 = [1, 5, -10, 'Hello', '...', false, '12'];

//console.log(arr1[0] + arr1[1]);
//console.log(arr1);

var arr2 = [5, 100];
arr2[99] = 'Name';
//console.log(arr2.length);
arr2[1] = '111';
//console.log(arr2);
var arr3 = new Array(100);




var arr4 = [1, 3, 5, 1000, 213, 21];

arr4.push(false);
//arr4.push(123123123);
//console.log(arr4);

arr4.unshift('Hello Peter');
//console.log(arr4);

arr4.shift();
//console.log(arr4);

arr4.pop();
//console.log(arr4);


// console.log(arr4[0]);
// console.log(arr4[1]);
// console.log(arr4[2]);
// console.log(arr4[3]);
// console.log(arr4[4]);


for (var i = 0; i < arr4.length; i++) {
    console.log(arr4[i], '|}|||', i);
}