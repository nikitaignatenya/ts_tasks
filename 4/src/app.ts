// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

interface obj {
  id: number;
  title: string;
  count: number;
  price: number;
}
const products: Array<obj> = [
  { id: 1, title: "Часы", count: 10, price: 500 },
  { id: 2, title: "Смартфон", count: 33, price: 1500 },
  { id: 3, title: "Моноблок", count: 6, price: 2200 },
  { id: 4, title: "Ноутбук", count: 13, price: 3000 },
  { id: 5, title: "Планшет", count: 22, price: 2100 },
];

// const res: Array<obj> = products.filter((el) => el.count > 10);
// console.log(res);

// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке

// const res: Array<obj> = products.reverse();
// console.log(...res);

// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3

// const res: Array<obj> = products.filter((el) => el.count % 3 == 0);
// console.log(res);

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

// const res: number = products
//   .map((el) => el.count * el.price)
//   .reduce((sum: number, el: number) => (el > sum ? sum + el : sum), 0);
// console.log(res);

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// const max: number = products.reduce(
//   (sum: number, el: obj) => (el.price > sum ? (sum = el.price) : sum),
//   0
// );
// const res: Array<obj> = products.filter((el) => el.price === max);
// console.log(res);

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

// let res: number = products.reduce(
//   (sum: number, el: obj) => (sum += el.price),
//   0
// );
// res = res / products.length;
// console.log(res);

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

// const max: number = products
//   .map((el: obj) => el.price * el.count)
//   .reduce((max: number, el: number) => (el > max ? (max = el) : max), 0);

// const res: Array<obj> = products.filter((el) => el.count * el.price === max);
// console.log(res);

// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту

// const mail: Array<string> = [
//   "nikita_123@mail.ru",
//   "hanna_123@mail.ru",
//   "artem_123@mail.ru",
//   "sergey_123@mail.ru",
//   "nikita_123@mail.ru",
//   "artem_123@mail.ru",
//   "darya_123@mail.ru",
// ];

// const regExp = /[A-Za-z]+\_[1-9]+\@[A-Za-z]+\.[A-Za-z]+/;

// function isValid(): void | boolean | Array<string> {
//   try {
//     mail.forEach((el) => {
//       if (!regExp.test(el)) throw new Error("Не валид");
//       if (typeof el !== "string") throw new Error("Не строка");
//     });
//     const wit = [...new Set(mail)];
//     return wit;
//   } catch (er) {
//     console.log(er);
//   }
// }

// const res = isValid();
// console.log(res);

// 9. Напишите код, который сделает из массива объект {width: 10, height: 20}

// interface obj1 {
//   name: string;
//   value: number;
// }
// interface obj2 {
//   width: number;
//   height: number;
// }
// const arr: Array<obj1> = [
//   { name: "width", value: 10 },
//   { name: "height", value: 20 },
// ];

// const newObj = {};
// function rev() {
//   arr.forEach((el): void => {
//     newObj[el.name] = el.value;
//   });
//   console.log(newObj);
// }

// rev();

// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function fun(a: number, b?: number): number | ((b: number) => number) {
  if (a && b) return a + b;
  else {
    return function (b: number): number {
      return a + b;
    };
  }
}

const res1 = fun(1, 2);
const res2 = (fun(1) as any)(2);

console.log(res1);
console.log(res2);
