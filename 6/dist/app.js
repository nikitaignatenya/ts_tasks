// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
// interface cla {
//   width: number;
//   height: number;
//   getArea(): number;
// }
// class Rectangle {
//   width: number = 3;
//   height: number = 2;
//   getArea() {
//     return this.width * this.height;
//   }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea());
// 2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.
// interface cl {
//   add(a: number, b: number): void;
//   subtract(a: number, b: number): void;
//   multiply(a: number, b: number): void;
//   devided(a: number, b: number): void;
// }
// class Calculator implements cl {
//   add(a: number, b: number) {
//     console.log(a + b);
//   }
//   subtract(a: number, b: number) {
//     console.log(b - a);
//   }
//   multiply(a: number, b: number) {
//     console.log(b * a);
//   }
//   devided(a: number, b: number) {
//     console.log(a / b);
//   }
// }
// const calculator = new Calculator();
// calculator.add(1, 2);
// calculator.subtract(1, 2);
// calculator.multiply(1, 2);
// calculator.devided(1, 2);
// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2
// interface cl {
//   radius: number;
//   getArea(): number;
// }
// class CircleR implements cl {
//   radius: number = 12;
//   getArea(): number {
//     return this.radius ** 2 * 3.14;
//   }
// }
// const circleR = new CircleR();
// const res = circleR.getArea();
// console.log(res);
// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
// продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
// displayProductInfo().
// interface obj {
//   price: number;
//   title: string;
// }
// interface cl {
//   product: Array<obj>;
//   displayProductInfo(): Array<obj>;
// }
// class Product implements cl {
//   product: Array<obj> = [
//     {
//       price: 12,
//       title: "макароны",
//     },
//     {
//       price: 21,
//       title: "редис",
//     },
//     {
//       price: 32,
//       title: "хлеб",
//     },
//   ];
//   displayProductInfo() {
//     const filt = this.product.filter((el: obj) => el.price > 20);
//     return filt;
//   }
// }
// const product = new Product();
// const res = product.displayProductInfo();
// console.log(res);
// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.
// interface obj {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
// }
// interface cl {
//   arr: Array<obj>;
//   addBook(book: string): void;
//   removeBookByTitle(title: string): void;
//   getBooksByAuthor(author: string): void;
//   getBooksByGenre(genre): void;
//   getBooksByYear(year): void;
// }
// class Library implements cl {
//   arr: Array<obj> = [
//     {
//       title: "name1",
//       author: "author1",
//       year: 1,
//       genre: "genre1",
//     },
//     {
//       title: "name2",
//       author: "author2",
//       year: 2,
//       genre: "genre2",
//     },
//     {
//       title: "name3",
//       author: "author3",
//       year: 3,
//       genre: "genre3",
//     },
//   ];
//   addBook(book: string): void {
//     this.arr.push({
//       title: book,
//       author: "author4",
//       year: 4,
//       genre: "genre4",
//     });
//     console.log(this.arr);
//   }
//   removeBookByTitle(title): void {
//     const filt = this.arr.filter((el: obj) => el.title !== title);
//     console.log(filt);
//   }
//   getBooksByAuthor(author): void {
//     const res = this.arr.filter((el: obj) => el.author == author);
//     console.log(res);
//   }
//   getBooksByYear(year): void {
//     const res = this.arr.filter((el: obj) => el.year == year);
//     console.log(res);
//   }
//   getBooksByGenre(genre): void {
//     const res = this.arr.filter((el: obj) => el.genre == genre);
//     console.log(res);
//   }
// }
// const library = new Library();
// library.addBook("name4");
// library.removeBookByTitle("name3");
// library.getBooksByAuthor("author2");
// library.getBooksByYear(1);
// library.getBooksByGenre("genre1");
// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).
// interface Cl {
//   getMode(): void;
// }
// class NumberStats implements Cl {
//   getMode(): void {
//     let arr: Array<number> = [1, 2, 1, 3, 3, 3];
//     let obj = {};
//     arr.forEach((el: number) => {
//       obj[el] = 0;
//     });
//     arr.forEach((el: number) => {
//       for (let key in obj) {
//         if (+key == el) obj[key] += 1;
//       }
//     });
//     const val: Array<number> = Object.values(obj);
//     const max: number = val.reduce(
//       (max: number, el: number) => (el > max ? (max = el) : max),
//       0
//     );
//     for (let key in obj) {
//       obj[key] == max ? console.log(key) : null;
//     }
//   }
// }
// const numberStats = new NumberStats();
// numberStats.getMode();
// 8. Создайте класс Sentence, который работает с предложением. Класс должен содержать один
// метод:
// getLongestWord() — находит и возвращает самое длинное слово в предложении.
// interface Cl {
//   getLongestWord(): void;
// }
// class Sentence implements Cl {
//   getLongestWord(): void {
//     let str: string = "Hello my name is Nikita";
//     const max = str
//       .split(" ")
//       .reduce(
//         (max: number, el: string) =>
//           el.length > max ? (max = el.length) : max,
//         0
//       );
//     const filt = str.split(" ").filter((el: string) => el.length == max);
//     console.log(filt);
//   }
// }
// const sentence = new Sentence();
// sentence.getLongestWord();
// 9. Создайте класс ListFilter, который работает с массивом чисел. Класс должен содержать один
// метод:
// getEvenNumbers() — возвращает все четные числа из массива.
// interface Cl {
//   getEvenNumbers(): Array<number>;
// }
// class ListFilter implements Cl {
//   getEvenNumbers(): Array<number> {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     const res = arr.filter((el) => el % 2 == 0);
//     return res;
//   }
// }
// const listFilter = new ListFilter();
// const res = listFilter.getEvenNumbers();
// console.log(res);
// 10. Создайте класс ArrayMerger, который сливает два отсортированных массива в один
// отсортированный массив используя метод: mergeSortedArrays()
// Входные данные: [1, 3, 5], [2, 4, 6]
// Выходные данные: [1, 2, 3, 4, 5, 6]
// interface Cl {
//   mergeSortedArrays(): Array<number>;
// }
// class ArrayMerger implements Cl {
//   mergeSortedArrays(): Array<number> {
//     let arr1: Array<number> = [1, 3, 5];
//     let arr2: Array<number> = [2, 4, 6];
//     return [...arr1, ...arr2];
//   }
// }
// const arrayMerger = new ArrayMerger();
// const res: Array<number> = arrayMerger.mergeSortedArrays();
// console.log(res);
// 11. Создайте класс PrimeNumberGenerator и метод generatePrimes(limit), который генерирует
// все простые числа до заданного предела.
// Входные данные: 10
// Выходные данные: [2, 3, 5, 7]
// Входные данные: 20
// Выходные данные: [2, 3, 5, 7, 11, 13, 17, 19]
// Просто́е число́— это натуральное число, большее единицы, имеющее ровно два натуральных
// делителя: 1 и само себя.
// interface Cl {
//   generatePrimes(limit: number): Array<number>;
//   check(num: number): boolean;
// }
// class PrimeNumberGenerator implements Cl {
//   arr: Array<number> = [];
//   check(num: number): boolean {
//     for (let i = 2; i <= num; i++) {
//       if (num % i !== 0 || num == 2) {
//         return true;
//       } else break;
//     }
//   }
//   generatePrimes(limit: number): Array<number> {
//     for (let i = 2; i <= limit; i++) {
//       this.check(i) === true ? this.arr.push(i) : null;
//     }
//     return this.arr;
//   }
// }
// const primeNumberGenerator = new PrimeNumberGenerator();
// const res: Array<number> = primeNumberGenerator.generatePrimes(20);
// console.log(res);
// 12. Создайте класс ShoppingCart, который будет содержать список товаров. Каждый товар — это
// объект с такими полями, как name, price и quantity. Класс должен содержать следующие
// методы:
// addItem(item) — добавление товара в корзину.
// removeItem(itemName) — удаление товара из корзины по названию.
// updateItemQuantity(itemName, newQuantity) — обновление количества товара в корзине.
// getTotalPrice() — вычисление общей суммы корзины.
// getItemsAbovePrice(minPrice) — возвращает список товаров, цена которых выше заданного
// порога.
// interface obj {
//   name: string;
//   price: number;
//   quantity: number;
// }
// interface Cl {
//   arr: Array<obj>;
//   addItem(item: obj): void;
//   removeItem(item: string): void;
//   updateItemQuantity(itemName: string, newQuantity: number): void;
//   getTotalPrice(): void;
//   getItemsAbovePrice(minPrice: number): void;
// }
// class ShoppingCart implements Cl {
//   arr: Array<obj> = [
//     {
//       name: "Война и мир",
//       quantity: 32,
//       price: 1225,
//     },
//     {
//       name: "Преступление и наказание",
//       quantity: 54,
//       price: 671,
//     },
//     {
//       name: "Мастер и Маргарита",
//       quantity: 12,
//       price: 470,
//     },
//     {
//       name: "Анна Каренина",
//       quantity: 43,
//       price: 864,
//     },
//     {
//       name: "Братья Карамазовы",
//       quantity: 34,
//       price: 796,
//     },
//     {
//       name: "Тихий Дон",
//       quantity: 32,
//       price: 1500,
//     },
//   ];
//   addItem(item: obj = Object()): void {
//     item.name = prompt("Имя");
//     item.quantity = +prompt("Количество");
//     item.price = +prompt("Цена");
//     this.arr.push(item);
//     console.log(this.arr);
//   }
//   removeItem(itemName: string): void {
//     const res: Array<obj> = this.arr.filter((el) => el.name !== itemName);
//     console.log(res);
//   }
//   updateItemQuantity(itemName: string, newQuantity: number): void {
//     this.arr.forEach((el: obj) =>
//       el.name === itemName ? (el.quantity = newQuantity) : null
//     );
//     console.log(this.arr);
//   }
//   getTotalPrice(): void {
//     const res: number = this.arr.reduce(
//       (sum: number, el: obj) => (sum += el.price),
//       0
//     );
//     console.log(res);
//   }
//   getItemsAbovePrice(minPrice: number): void {
//     const res = this.arr.filter((el: obj) => el.price >= minPrice);
//     console.log(res);
//   }
// }
// const shoppingCart = new ShoppingCart();
// shoppingCart.addItem();
// shoppingCart.removeItem("Анна Каренина");
// shoppingCart.updateItemQuantity("Анна Каренина", 999);
// shoppingCart.getTotalPrice();
// shoppingCart.getItemsAbovePrice(800);
// 13. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.
// interface Cl {
//   arr: Array<number>;
//   getMax(): number;
//   getMin(): number;
//   getSum(): number;
//   getAverage(): number;
//   getAboveAverage(): Array<number>;
//   sortDescending(): Array<number>;
// }
// class NumberOperations implements Cl {
//   arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   getMax(): number {
//     return Math.max(...this.arr);
//   }
//   getMin(): number {
//     return Math.min(...this.arr);
//   }
//   getSum(): number {
//     return this.arr.reduce((sum: number, el: number) => (sum += el), 0);
//   }
//   getAverage(): number {
//     return this.getSum() / this.arr.length;
//   }
//   getAboveAverage(): Array<number> {
//     return this.arr.filter((el: number) => el > this.getAverage());
//   }
//   sortAscending(): Array<number> {
//     return this.arr.sort();
//   }
//   sortDescending(): Array<number> {
//     return this.sortAscending().reverse();
//   }
// }
// const numberOperations = new NumberOperations();
// console.log(
//   numberOperations.getMax(),
//   numberOperations.getMin(),
//   numberOperations.getSum(),
//   numberOperations.getAverage(),
//   numberOperations.getAboveAverage(),
//   numberOperations.sortAscending(),
//   numberOperations.sortDescending()
// );
