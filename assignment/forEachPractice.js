// F9 Take an array of strings, return an array of strings of even length from the input array
//   of strings.
const evenStr = (array) => {
  const newArr = [];
  array.forEach((e) => {
    console.log(e);
  });

  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].length % 2 === 0) {
  //       newArr.push(array[i]);
  //     }
  //   }
  return newArr;
};
console.log(evenStr(["asc", "asdjkl", "asdf"])); //["asdjkl", "asdf"]
// console.log(evenStr(["aa", "asdf", "asdfgh"])); //["aa", "asdf", "asdfgh"]
// console.log(evenStr(["asd", "qwert", "1"])); //[""]
