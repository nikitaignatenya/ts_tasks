// Преобразовать все строки в верхний регистр
// Необходимо 3 решения: for, for of, map
// const words = ['hello', 'world'];
// Ожидается: ['HELLO', 'WORLD']

// let strArr: Array<string> = ["hello", "world"];
// let newArr: string[] = [];
// for (let i = 0; i < strArr.length; i++) {
//   newArr.push(strArr[i].toUpperCase());
// }

// for (let el of strArr) {
//   newArr.push(el.toUpperCase());
// }
// console.log(newArr);

// const res = strArr.map((el) => el.toUpperCase());
// console.log(res);

// Найти строку с максимальной длиной
// Необходимо 3 решения: for, forEach, reduce
// const words = ['pen', 'notebook', 'book', 'dictionary'];
// Ожидается: 'dictionary'

// const words: Array<string> = ["pen", "notebook", "book", "dictionary"];
// let count: number = 0;
// for (let i = 0; i < words.length; i++) {
//   words[i].length > count ? (count = words[i].length) : count;
// }
// for (let i = 0; i < words.length; i++) {
//   words[i].length == count ? console.log(words[i]) : null;
// }

// let count: number = 0;
// words.forEach((el) => {
//   el.length > count ? (count = el.length) : count;
// });

// words.forEach((el) => {
//   count == el.length ? console.log(el) : null;
// });

// const arrReduce = words.reduce(
//   (sum, el) => (el.length > sum ? (sum = el.length) : sum),
//   0
// );

// const arrFilter = words.filter((el) => el.length == arrReduce);
// console.log(arrFilter);

// Подсчитать количество строк, содержащих букву “e”
// Необходимо 3 решения: for, while, и через filter и length
// const words = ['tree', 'bush', 'flower', 'grass'];
// Ожидается: 2

// const str: Array<string> = ["tree", "bush", "flower", "grass"];
// let letter: string = `e`;
// let count: number = 0;
// for (let i = 0; i < str.length; i++) {
//   str[i].includes(letter) ? count++ : count;
// }

// let i: number = 0;

// while (i < str.length) {
//   str[i].includes(letter) ? count++ : count;
//   i++;
// }

// const res: Array<string> = str.filter((el) => el.includes(letter));
// console.log(res.length);

// console.log(count);

// Проверить, содержит ли массив хотя бы один палиндром
// Необходимо 6 решений: for, for of, while, do while, forEach, some
// const words = ['hello', 'level', 'world'];
// Ожидается: true

const str: Array<string> = ["hello", "level", "world"];

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i].split("").reverse().join("")) {
//     console.log(true);
//     break;
//   }
// }

// for (let el of str) {
//   if (el == el.split("").reverse().join("")) {
//     console.log(true);
//     break;
//   }
// }

// let i: number = 0;
// do {
//   if (str[i] == str[i].split("").reverse().join("")) {
//     console.log(true);
//     break;
//   }
//   i++;
// } while (i < str.length);

// str.forEach((el) =>
//   el == el.split("").reverse().join("") ? console.log(true) : null
// );

// const res = str.some((el) =>
//   el == el.split("").reverse().join("") ? true : false
// );

// console.log(res);
