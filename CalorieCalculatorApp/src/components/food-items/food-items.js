export class FoodItem{

    constructor(id, name, image_url, calories, number= 1,) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.calories = calories;
        this.number = number;
    }
}

export const foodItems = [
    new FoodItem(1,'Пюре с котлетами', 'food-potato.PNG', 450),
    new FoodItem(2,'Семга на пару с овощами', 'steamed-fish-with-vegetables.PNG', 450),
    new FoodItem(3,'Жареные сосиски с овощами', 'sausages-with-vegetables.PNG', 450),
]