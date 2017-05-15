/**Created by MrProxy on 12.05.2017.*/


/*Лабораторна по автомобілям*/

var cars = [];
for (var i = 0; i < 5; i++) {
    cars.push({
        firmName: prompt("Type firm name of your car."),
        modelName: prompt("Type model name of your car."),
        engine: parseFloat(prompt("Engine?"))
    });
}
console.log(cars);

var carPower = [];

for (var k = 0; k < cars.length - 1; k++) {
    if (cars[k].engine >= 2) {
         carPower.push(cars[k]);
    }
}
console.log(carPower);

// var carsPower = cars.slice();
//
// for (var k = 0; k < carsPower.length - 1; k++) {
//     if (carsPower[k].engine < 2) {
//         carsPower.splice(k, 1);
//     }
// }
//
// console.log(carsPower);