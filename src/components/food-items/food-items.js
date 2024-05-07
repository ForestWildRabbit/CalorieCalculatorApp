export class FoodItem{

    constructor(id, name, image_url, calories, number= 1,) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.calories = calories;
        this.number = number;
    }
}

export class FoodItemTemplate{

    constructor(id, name, foodItems) {
        this.id = id;
        this.name = name;
        this.foodItems = foodItems;
        this.calories = this.calculate_calories();
    }

    calculate_calories(){
        let calories = 0;
        for (let foodItem of this.foodItems){
            calories += foodItem.calories;
        }
        return calories;
    }
}

export const foodItems = [
    new FoodItem(1,'Пюре с котлетами', 'food-potato.PNG', 450),
    new FoodItem(2,'Семга на пару с овощами', 'steamed-fish-with-vegetables.PNG', 350),
    new FoodItem(3,'Жареные сосиски с овощами', 'sausages-with-vegetables.PNG', 450),
    new FoodItem(4,'Салат Оливье', 'olivier-salad.webp', 280),
    new FoodItem(5,'Салат Цезарь', 'caesar-salad.webp', 340),
    new FoodItem(6,'Клюквенный морс', 'cranberry-juice.jfif', 220),
]

export const foodItemsTemplates = [
    new FoodItemTemplate(1, 'Комплект питания 1', [
        foodItems[3],
        foodItems[1],
        foodItems[5],
    ]),
    new FoodItemTemplate(2, 'Комплект питания 2', [
        foodItems[4],
        foodItems[0],
        foodItems[5],
    ]),
    new FoodItemTemplate(3, 'Комплект питания 3', [
        foodItems[2],
        foodItems[5],
    ]),
]

export const suggestTemplate = calculated_calories => {
    let suggestedTemplate = foodItemsTemplates[0];
    let min_diff = calculated_calories;
    for (let foodItemsTemplate of foodItemsTemplates){
        let diff = Math.abs(calculated_calories / 3 - foodItemsTemplate.calories);
        if (diff < min_diff){
            min_diff = diff;
            suggestedTemplate = foodItemsTemplate;
        }
    }
    return suggestedTemplate;
}

export const personal_data = {
    name: undefined,
    phone: undefined,
}