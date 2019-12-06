class Breakfast {
    constructor(food, drink)  {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
/* 
Dinner will have a constructor with salad, soup, entree, and dessert.
Indicate that dessert is intended to be a private property by including an underscore (_) at the beginning.
*/
class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}
