// object = A group of properties and methods.
//          properties = what an object has.
//          methods = what a object can do.
//          use . to access properties/methods

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function() {
        console.log("You drive the car.");
    },

    break: function() {
        console.log("You step on the break!");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.break();