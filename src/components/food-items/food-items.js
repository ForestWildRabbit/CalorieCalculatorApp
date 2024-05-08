export class FoodItem{

    constructor(id, name, image_url, calories, price, number= 1,) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.calories = calories;
        this.price = price;
        this.number = number;
    }
}

export class FoodItemTemplate{

    constructor(id, name, foodItems) {
        this.id = id;
        this.name = name;
        this.foodItems = foodItems;
        this.calories = calculate_calories(this.foodItems);
        this.price = calculate_price(this.foodItems);
    }
}

export const calculate_price = foodItems => {
    let price = 0;
    for (let foodItem of foodItems){
        price += foodItem.price;
    }
    return price;
}

export const calculate_calories = foodItems => {
    let calories = 0;
    for (let foodItem of foodItems){
        calories += foodItem.calories;
    }
    return calories;
}

export const foodItems = [
    new FoodItem(1,'Пюре с котлетами', 'food-potato.PNG', 450, 250),
    new FoodItem(2,'Семга на пару с овощами', 'steamed-fish-with-vegetables.PNG', 350, 500),
    new FoodItem(3,'Жареные сосиски с овощами', 'sausages-with-vegetables.PNG', 450, 250),
    new FoodItem(4,'Салат Оливье', 'olivier-salad.webp', 280, 250),
    new FoodItem(5,'Салат Цезарь', 'caesar-salad.webp', 340, 350),
    new FoodItem(6,'Клюквенный морс', 'cranberry-juice.jfif', 220, 400),
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

export const promocodes = [
    {title: 'mvp10', coefficient: 0.9, discount: '-10%'},
    {title: 'mvp20', coefficient: 0.8, discount: '-20%'},
    {title: 'mvp30', coefficient: 0.7, discount: '-30%'},
    {title: 'mvp50', coefficient: 0.5, discount: '-50%'},
]

export const get_coefficient_discount = promocodeTitle => {
    for (let promoItem of promocodes){
        if (promoItem.title === promocodeTitle){
            return promoItem.coefficient;
        }
    }
    return 1;  // no discount
}

export const personal_data = {
    name: undefined,
    phone: undefined,
    address: undefined,
    cardholder: undefined,
    cardNumber: undefined,
    cardExpiration: undefined,
    CVV: undefined,
}