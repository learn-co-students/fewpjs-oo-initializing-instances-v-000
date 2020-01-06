// Write your code here
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let bigFluffyDog1 = new Dog("Spotty", "Dalmation");
let bigFluffyDog2 = new Dog("Tinker", "Jack-Russel");

class Breakfast {
  constructor(food, drink) {
    this.food = food
    this.drink = drink
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this._salad = salad
    this._soup = soup
    this._entree = entree
    this._dessert = dessert
  }
}
