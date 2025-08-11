// 1. Напиши функцию wrapInArray<T>, которая принимает значение любого типа и
// возвращает массив, содержащий это значение.
// wrapInArray(5) // [5]
// wrapInArray("hi") // ["hi"]
// function wrapInArray<T>(a: T): Array<any> {
//   return [a];
// }
// const res: Array<any> = wrapInArray<any>("hi");
// console.log(res);
// 2. Напиши функцию printKey<T, K extends keyof T>, которая принимает объект и ключ, и выводит значение этого ключа.
// printKey({name: "Alex", age: 25}, "name") // Alex
// function printKey<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// interface ob {
//   name: string;
//   age: number;
// }
// const res = printKey<ob, any>({ name: "Alex", age: 25 }, "name");
// console.log(res);
// 3. Напиши функцию mergeObjects<T, U>, которая объединяет два объекта в один.
// mergeObjects({a: 1}, {b: 2}) // {a: 1, b: 2}
// interface obj1 {
//   a: number;
// }
// interface obj2 {
//   b: number;
// }
// function mergeObjects<T, U>(a: T, b: U): T & U {
//   return { ...a, ...b };
// }
// const res: obj1 & obj2 = mergeObjects<obj1, obj2>({ a: 1 }, { b: 2 });
// console.log(res);
// 4. Напиши функцию doubleOrRepeat<T>, которая:
//  • Если T — число, возвращает число, умноженное на 2
//  • Если T — строка, возвращает строку, повторённую дважды
// doubleOrRepeat(5) // 10
// doubleOrRepeat("Hi") // "HiHi"
// function doubleOrRepeat<T>(a: T): void {
//   if (typeof a == "string") console.log(a.repeat(2));
//   if (typeof a == "number") console.log(a * 2);
// }
// doubleOrRepeat<number>(5);
// doubleOrRepeat<string>("hi");
// 5. Функция transformArray<T>:
//  • Если массив чисел — возводит каждый элемент в квадрат
//  • Если массив строк — переводит в верхний регистр
// transformArray([2, 3]) // [4, 9]
// transformArray(["hi", "go"]) // ["HI", "GO"]
// function transformArray<T>(arr: T): void {
//   if (Array.isArray(arr)) {
//     const res = arr.map((el) => {
//       return typeof el == "string" ? el.toUpperCase() : el ** 2;
//     });
//     console.log(res);
//   }
// }
// transformArray<Array<string>>(["hi", "go"]);
// transformArray<Array<number>>([4, 9]);
// 6. Функция maxOrLongest<T>:
//  • Если числа — возвращает максимальное
//  • Если строки — возвращает самую длинную
// maxOrLongest([3, 8, 5]) // 8
// maxOrLongest(["a", "hello", "hi"]) // "hello"
// function maxOrLongest<T>(arr: T) {
//   if (Array.isArray(arr)) {
//     const res: number | string = arr.reduce((max: any, el: number | string) => {
//       if (typeof el == "number") {
//         return el > max ? (max = el) : max;
//       }
//       if (typeof el == "string") {
//         return el.length > max.length ? (max = el) : max;
//       }
//     });
//     console.log(res);
//   }
// }
// maxOrLongest<Array<number>>([3, 8, 5]);
// maxOrLongest<Array<string>>(["a", "hello", "hi"]);
// 7. Функция evenOrLength<T>:
//  • Если число — возвращает true, если оно чётное
//  • Если строка — возвращает её длину
// evenOrLength(4) // true
// evenOrLength("cat") // 3
// function evenOrLength<T>(p: T): void {
//   if (typeof p == "string") console.log(p.length);
//   if (typeof p == "number" && p % 2 == 0) console.log(true);
// }
// evenOrLength(4);
// evenOrLength("cat");
// 8. Функция reverseSmart<T>:
//  • Если числа — реверсирует массив
//  • Если строки — реверсирует буквы в строках массива
// reverseSmart([1, 2, 3]) // [3, 2, 1]
// reverseSmart(["hi", "ok"]) // ["ih", "ko"]
// function reverseSmart<T>(a: T) {
//   if (Array.isArray(a)) {
//     const resEvery: boolean = a.every((el) =>
//       typeof el == "number" ? true : false
//     );
//     if (resEvery === false) {
//       const mapa = a.map((el: string) => {
//         return el.split("").reverse().join("");
//       });
//       console.log(mapa);
//     }
//     if (resEvery === true) {
//       console.log(a.reverse());
//     }
//   }
// }
// reverseSmart<Array<number>>([1, 2, 3]);
// reverseSmart<Array<string>>(["ok", "hi"]);
// 9. Функция diffOrLengthDiff<T> принимает два аргумента:
//  • Если числа — возвращает их разницу
//  • Если строки — возвращает разницу в длине
// diffOrLengthDiff(10, 4) // 6
// diffOrLengthDiff("cat", "mouse") // 2
function diffOrLengthDiff(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return Math.max(a, b) - Math.min(a, b);
    }
    if (typeof a == "string" && typeof b == "string") {
        return Math.max(a.length, b.length) - Math.min(a.length, b.length);
    }
}
const res = diffOrLengthDiff(10, 4);
const res2 = diffOrLengthDiff("cat", "mouse");
console.log(res);
console.log(res2);
