/**Created by MrProxy on 12.05.2017.*/


/*Написати програму, яка в циклі питає в користувача назву властивості і її значення і заповнити цим об'єкт.
 Псля кожної пари ключ-значення запитатись в користувача чи він хоче ще щось добавити (confirm).
 Після цього запустити цикл, в якому виведете всі властивості цього обєкта в такому форматі -
 propName=propValue в консоль*/

var someObject = {};

do {
    var property = prompt("Type here Object's property");
    var value = prompt("Type here properties' value");
    someObject[property] = value;
    var x = confirm("Add more properties to Object?");
} while (x === true);

for (var k in someObject) {
    console.log(k + " = " + someObject[k]);
}