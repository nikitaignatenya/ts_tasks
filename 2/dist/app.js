// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве
// const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumArr = arr.reduce((sum, el) => (el % 2 == 0 ? (sum += el) : sum), 0);
// console.log(sumArr);
// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
// const strArr: String[] = ["привет", "пока", "здравсвтуйте", "досвидания"];
// const strArrFilter = strArr.filter((el) => el.includes("а"));
// console.log(strArrFilter);
// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
// const arr: number[] = [];
// for (let index = 0; index <= 10; index++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// const sumArr = arr.reduce((sum, el) => (sum += el), 0);
// console.log(sumArr);
// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
// const arr: Array<string> = [];
// for (let index = 0; index <= 3; index++) {
//   arr.push(prompt());
// }
// const someArr = arr.some((el) => (el.length > 5 ? true : false));
// console.log(someArr);
// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2
// const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrFiltered = arr.filter((el) => el % 2 == 0 && el % 3 == 0);
// console.log(arrFiltered);
// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.
// const arrStr: Array<string> = ["hello", "Nilita", "Ignatenya"];
// let str: string = "";
// for (let index = 0; index < arrStr.length; index++) {
//   str += arrStr[index];
// }
// console.log(str);
// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.
// const arr: any = [];
// for (let index = 0; index <= 5; index++) {
//   const pushing: any = prompt();
//   !isNaN(pushing) ? arr.push(pushing) : null;
// }
// console.log(arr);
// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром
// const arrStr: string[] = ["hello", "Nikita", "lol"];
// const arrSome: boolean = arrStr.some((el) => {
//   return el == el.split("").reverse().join("") ? true : false;
// });
// console.log(arrSome);
// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения
// const arr: Array<string | number> = [1, 2, 1, "hi", "hello", "hi"];
// const arrNew: Array<string | number> = [];
// for (let index = 0; index < arr.length; index++) {
//   arr.indexOf(arr[index]) == index ? arrNew.push(arr[index]) : null;
// }
// console.log(arrNew);
// const setArr: Array<string | number> = [...new Set(arr)];
// console.log(setArr);
// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
// const arrStr: Array<string> = ["hello", "Nikita", "Ignatenay"];
// const arrLetters: Array<string> = ["a", "e", "i", "o", "u"];
// let res: string[] = [];
// arrStr.forEach((el) => {
//   const elFiltered: string = el
//     .split("")
//     .filter((ell) => arrLetters.includes(ell))
//     .join("");
//   res.push(elFiltered);
// });
// console.log(res);
// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
// const arr: string[] = [];
// for (let index = 0; index < 3; index++) {
//   arr.push(prompt());
// }
// const arrEvery: boolean = arr.every((el) =>
//   /^\w+@\w+\.\w+$/.test(el) ? true : false
// );
// console.log(arrEvery);
// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
// const arrNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumArr: number = arrNum.reduce(
//   (sum, el, i, arr) => (i % 2 == 0 ? (sum += el) : sum),
//   0
// );
// console.log(sumArr);
// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// const arr: number[] = [];
// for (let index = 0; index < 5; index++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// const arrMap: Array<string> = arr.map((el) => (el % 2 == 0 ? "чёт" : "нечёт"));
// console.log(arrMap);
// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
let str = "aaa111bbbbcc";
const obj = {};
for (let index = 0; index < str.length; index++) {
    if (!obj[str[index]]) {
        obj[str[index]] = 1;
    }
    else {
        obj[str[index]] += 1;
    }
}
console.log(obj);
let count = 0;
let value = "";
for (let key in obj) {
    if (obj[key] > count) {
        count = obj[key];
        value = key;
    }
}
console.log(value);
console.log(count);
