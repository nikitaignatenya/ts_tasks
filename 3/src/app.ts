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

// Найти сумму квадратов только положительных чисел
// Необходимо 5 решений: for, for of, while, do while, forEach
// const nums = [-3, 2, -1, 4];
// Ожидается: 2² + 4² = 4 + 16 = 20
// const nums: Array<number> = [-3, 2, -1, 4];
// let sum: number = 0;
// for (let i = 0; i < nums.length; i++) {
//   nums[i] > 0 ? (sum += nums[i] ** 2) : nums;
// }
// for (let el of nums) {
//   el > 0 ? (sum += el ** 2) : sum;
// }
// let i: number = 0;
// while (i < nums.length) {
//   nums[i] > 0 ? (sum += nums[i] ** 2) : nums;
//   i++;
// }
// do {
//   nums[i] > 0 ? (sum += nums[i] ** 2) : nums;
//   i++;
// } while (i < nums.length);

// nums.forEach((el) => (el > 0 ? (sum += el ** 2) : nums));
// console.log(sum);

// interface obj {
//   id: number;
//   name: string;
//   isActive: boolean;
// }
// const users: Array<obj> = [
//   { id: 1, name: "Alice", isActive: true },
//   { id: 2, name: "Bob", isActive: false },
//   { id: 3, name: "Charlie", isActive: true },
//   { id: 4, name: "Diana", isActive: false },
// ];

// 1. Отфильтруй массив users, чтобы получить только активных пользователей.
// const res: Array<obj> = users.filter((el) => el.isActive == true);
// console.log(res);

// 2. Преобразуй массив users в массив строк из имён пользователей.
// const res: Array<string> = users.map((el) => el.name);
// console.log(res);

// 3. Проверь, есть ли хотя бы один неактивный пользователь. Если есть - true, иначе - false
// const res: boolean = users.some((el) => (el.isActive == true ? false : true));
// console.log(res);

// interface obj {
//   id: number;
//   name: string;
//   score: number;
// }
// const students: Array<obj> = [
//   { id: 1, name: "Anna", score: 75 },
//   { id: 2, name: "John", score: 92 },
//   { id: 3, name: "Tom", score: 88 },
// ];

// 4. Из массива students отфильтруй только тех, у кого балл выше 80.
// const res: Array<obj> = students.filter((el) => el.score > 80);
// console.log(res);

// 5. Отобрази список имён всех курсов, которые проходят пользователи.
//  Курсы находятся внутри каждого пользователя в массиве courses.
// Результат: ['TS', 'React', 'Node', 'TS', 'HTML']
// interface obj {
//   id: number;
//   name: string;
//   courses: Array<string>;
// }
// const users: Array<obj> = [
//   { id: 1, name: "Alice", courses: ["TS", "React"] },
//   { id: 2, name: "Bob", courses: ["Node", "TS"] },
//   { id: 3, name: "Clara", courses: ["HTML"] },
// ];

// const arr: Array<string> = [];
// users.forEach((el) => arr.push(...el.courses));
// console.log(arr);

// 6. Из массива projects получи список названий только тех проектов,
// в которых участвует пользователь с userId === 3.

// interface obj {
//   id: number;
//   name: string;
//   members: Array<number>;
// }
// const projects = [
//   { id: 1, name: "CRM", members: [1, 2, 3] },
//   { id: 2, name: "Landing Page", members: [2] },
//   { id: 3, name: "Mobile App", members: [3, 4] },
// ];

// const res: Array<obj> = projects.filter((el) => {
//   const some = el.members.some((ell) => (ell === 3 ? true : false));
//   if (some === true) {
//     return el;
//   }
// });

// console.log(res);

// 7. В массиве events найди все записи, которые происходят в 2023 году.
// Результат:  ["Conference", "Workshop"]

// interface obj {
//   id: number;
//   name: string;
//   date: string;
// }
// const events: Array<obj> = [
//   { id: 1, name: "Conference", date: "2023-05-01" },
//   { id: 2, name: "Workshop", date: "2023-11-15" },
//   { id: 3, name: "Webinar", date: "2025-01-20" },
// ];

// let arr: Array<string> = [];
// events.forEach((el) => {
//   if (el.date.includes("2023")) {
//     arr.push(el.name);
//   }
// });
// console.log(arr);

// 8. Для массива teams получи имена всех участников всех команд, но без повторений.
interface obj {
  id: number;
  members: Array<string>;
}
const teams: Array<obj> = [
  { id: 1, members: ["Alice", "Bob"] },
  { id: 2, members: ["Bob", "Clara"] },
  { id: 3, members: ["Dave", "Alice"] },
];

let arr: Array<string> = [];
teams.forEach((el) => {
  arr.push(...el.members);
});

const res = [...new Set(arr)];
console.log(res);
