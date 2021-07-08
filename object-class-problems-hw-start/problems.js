/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: "Apple",
  model: "Mac Book",
  ram: 8,
  storage: 250,
};

/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
  name: "Barefoot",
  grape: "Shiraz",
  vintage: 2020,
  volume: 900,
  amountRemaining: 900,

  drink(amount) {
    this.amountRemaining -= amount;
  },

  refill(amount) {
    this.amountRemaining += amount;
  },
};

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
  constructor() {
    this.name = "Barbie";
    this.description = "Doll that walks";
    this.price = 5;
  }
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart {
  constructor() {
    this.contents = [];
  }
  addItem(item) {
    this.contents.push(item);
  }
  removeItem(item) {
    const index = this.contents.indexOf(item);
    this.contents.splice(index, 1);
  }
  empty() {
    this.contents.splice(0, this.contents.length);
  }
  getTotal(acc, val) {
    this.contents.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  }
}

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {
  constructor() {
    this.width = 20;
    this.height = 10;
  }
  getArea(width, height) {
    this.width * this.height;
  }
  getPerimeter() {
    2 * (this.width + this.height);
  }
}

// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape,
};
