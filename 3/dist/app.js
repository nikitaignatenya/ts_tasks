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
const str = ["hello", "level", "world"];
const teams = [
    { id: 1, members: ["Alice", "Bob"] },
    { id: 2, members: ["Bob", "Clara"] },
    { id: 3, members: ["Dave", "Alice"] },
];
let arr = [];
teams.forEach((el) => {
    arr.push(...el.members);
});
const res = [...new Set(arr)];
console.log(res);
