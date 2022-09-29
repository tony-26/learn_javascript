//forEach F6
// let str = "";
// const func1 = (input) => {
//   str = str + input[0];
// };

// const arr1 = ["asd", "qwer", "iklo"];
// arr1.forEach((input) => {
//   str = str + input[0];
// });
// console.log(str);

// const arr2 = ["lkjio", "1huisd", "-sdji"];
// arr2.forEach((input) => {
//   str = str + input[0];
// });
// console.log(str);

//F6
// const funcStr = (array) => {
//   let newStr = "";
//   for (let i = 0; i < array.length; i++) {
//     newStr = newStr + array[i][0];
//   }
//   return newStr;
// };
// console.log(funcStr(["asd", "qwer", "iklo"])); //aqi
// console.log(funcStr(["lkjio", "1huisd", "-sdji"])); //l1-
// console.log(funcStr(["12345", "qwer", "pokij", "1234"])); //1qp1

//F11 Take an array of numbers, multiply all the number in the array together which
//    are multiples of 3,return the result
// const mul3 = (array) => {
//   let multiply = 0;
//   const initV = 1;
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//       newArr.push(array[i]);
//     }
//   }
//   for (let j = 0; j < newArr.length; j++) {
//     multiply = (multiply + 1) * newArr[j];
//   }
//   return multiply;
// };
// console.log(mul3([3, 4, 9, 6])); //144
// console.log(mul3([2, 15, 9, 3, 7, 9])); //3645
// console.log(mul3([2, 4, 8]));

// let product = 1;
// let value = [];
// const multi = (input) => {
//   if (input % 3 === 0) {
//     value.push(input);
//   }

//   product = product * value;
// };
// const arr1 = [3, 4, 9, 6];
// arr1.forEach((value) => {
//   product = product * value;
// });
// console.log(product);

// F9 Take an array of strings, return an array of strings of even length from the input array
//   of strings.
// const evenStr = (array) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length % 2 === 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };
// console.log(evenStr(["asc", "asdjkl", "asdf"])); //["asdjkl", "asdf"]
// console.log(evenStr(["aa", "asdf", "asdfgh"])); //["aa", "asdf", "asdfgh"]
// console.log(evenStr(["asd", "qwert", "1"])); //[""]

//F10
// const equation = (a, b, c) => {
//   let arr = [];
//   let answer1 = 0;
//   answer1 = b * b - 4 * a * c;
//   answer2 = -(b * b - 4 * a * c);
//   arr.push(answer1, answer2);
//   return arr;
// };
// console.log(equation(1, 4, 4)); //0
// console.log(equation(10, 15, 8)); //+-95
// console.log(equation(100, 200, 150)); //+-20000

//F12
// const funcStr = (array) => {
//   let sum = "";
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// };
// console.log(funcStr(["absd", "1234"])); //"absd1234"
// console.log(funcStr(["asas", "lkjh", "1"])); //"asaslkjh1"
// console.log(funcStr(["aa", "123", ""])); //"aa123"
