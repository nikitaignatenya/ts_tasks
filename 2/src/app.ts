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

// let str: string = "aaa111bbbbcc";
// const obj: any = {};

// for (let index = 0; index < str.length; index++) {
//   if (!obj[str[index]]) {
//     obj[str[index]] = 1;
//   } else {
//     obj[str[index]] += 1;
//   }
// }
// console.log(obj);

// let count: number = 0;
// let value: string = "";
// for (let key in obj) {
//   if (obj[key] > count) {
//     count = obj[key];
//     value = key;
//   }
// }

// console.log(value);
// console.log(count);

// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const strArr: Array<string> = [`hschool`, `company`];
// const newArr: Array<string> = [];
// strArr.forEach((el) => {
//   newArr.push(`!${el}`);
// });

// console.log(newArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const numsArr: Array<number> = [1, 2, 3, 4, 5];
// let res: boolean;
// for (let i = 1; i < numsArr.length; i++) {
//   numsArr[i] > numsArr[i - 1] ? (res = true) : (res = false);
// }

// console.log(res);

// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// const numArr: Array<number> = [1, 4, 3, 7];
// let count: number = -Infinity;
// for (let i = 0; i < numArr.length; i++) {
//   for (let l = 0; l < numArr.length; l++) {
//     numArr[i] - numArr[l] > count ? (count = numArr[i] - numArr[l]) : count;
//   }
// }

// console.log(count);

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// interface obj {
//   title: string;
//   author: string;
//   year: number;
// }
// const books: obj[] = [
//   {
//     title: "Война и мир",
//     author: "Толстой",
//     year: 1869,
//   },
//   {
//     title: "Преступление и наказание",
//     author: "Достоевский",
//     year: 1866,
//   },
//   {
//     title: "Мастер и Маргарита",
//     author: "Булгаков",
//     year: 1967,
//   },
//   {
//     title: "Собачье сердце",
//     author: "Булгаков",
//     year: 1925,
//   },
//   {
//     title: "Мёртвые души",
//     author: "Гоголь",
//     year: 1842,
//   },
// ];

// const res: Array<obj> = books.filter((el) => el.author == "Булгаков");

// console.log(res);

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// interface obj {
//   title: string;
//   author: string;
//   price: number;
// }

// const books = [
//   {
//     title: "Гарри Поттер и философский камень",
//     author: "Роулинг",
//     price: 65,
//   },
//   {
//     title: "Властелин колец",
//     author: "Толкин",
//     price: 80,
//   },
//   {
//     title: "1984",
//     author: "Оруэлл",
//     price: 45,
//   },
//   {
//     title: "Три товарища",
//     author: "Ремарк",
//     price: 55,
//   },
//   {
//     title: "Маленький принц",
//     author: "Сент-Экзюпери",
//     price: 30,
//   },
//   {
//     title: "Атлант расправил плечи",
//     author: "Рэнд",
//     price: 120,
//   },
//   {
//     title: "Шерлок Холмс",
//     author: "Дойл",
//     price: 42,
//   },
// ];

// const res: Array<obj> = books.filter((el) => el.price > 50);
// console.log(res);

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// interface obj {
//   title: string;
//   author: string;
//   count: number;
// }

// const books: obj[] = [
//   {
//     title: "Война и мир",
//     author: "Толстой",
//     count: 1225,
//   },
//   {
//     title: "Преступление и наказание",
//     author: "Достоевский",
//     count: 671,
//   },
//   {
//     title: "Мастер и Маргарита",
//     author: "Булгаков",
//     count: 470,
//   },
//   {
//     title: "Анна Каренина",
//     author: "Толстой",
//     count: 864,
//   },
//   {
//     title: "Братья Карамазовы",
//     author: "Достоевский",
//     count: 796,
//   },
//   {
//     title: "Тихий Дон",
//     author: "Шолохов",
//     count: 1500,
//   },
// ];

// let sum: number = 0;
// let res: obj;
// for (let i = 0; i < books.length; i++) {
//   books[i].count > sum ? (sum = books[i].count) : sum;
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].count == sum ? (res = books[i]) : null;
// }

// console.log(res);

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const text: string =
//   "Программирование это очень увлекательная и интересная деятельность";

// const res: number = text
//   .split(" ")
//   .reduce(
//     (sum, el) =>
//       el.split("").length > sum ? (sum = el.split("").length) : sum,
//     0
//   );
// console.log(res);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// interface obj {
//   name: string;
//   salary: number;
// }

// const employees: Array<obj> = [
//   {
//     name: "Алексей",
//     salary: 50000,
//   },
//   {
//     name: "Мария",
//     salary: 65000,
//   },
//   {
//     name: "Петр",
//     salary: 45000,
//   },
//   {
//     name: "Елена",
//     salary: 70000,
//   },
//   {
//     name: "Дмитрий",
//     salary: 55000,
//   },
//   {
//     name: "Анна",
//     salary: 60000,
//   },
// ];
// let array: Array<number> = [];

// employees.forEach((el) => array.push(el.salary));

// const res: number = array.reduce((sum, el) => (sum += el), 0);

// console.log(res / array.length);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface obj {
  name: string;
  price: number;
  quantity: number;
}
const products: Array<obj> = [
  {
    name: "Хлеб",
    price: 30,
    quantity: 2,
  },
  {
    name: "Молоко",
    price: 60,
    quantity: 3,
  },
  {
    name: "Яблоки",
    price: 120,
    quantity: 1,
  },
  {
    name: "Сыр",
    price: 250,
    quantity: 2,
  },
  {
    name: "Мясо",
    price: 400,
    quantity: 1,
  },
];

let newArr: { name: string; fullPrice: number }[] = [];
products.forEach((el) => {
  newArr.push({
    name: el.name,
    fullPrice: el.price * el.quantity,
  });
});

console.log(newArr);
