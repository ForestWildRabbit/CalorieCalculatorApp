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

// export const preferences = {
//     meat: {id: 1, name: 'Мясо', selected: false},
//     fish: {id: 2, name: 'Рыба', selected: false},
//     vegetarian: {id: 3, name: 'Вегетарианские блюда', selected: false},
//     soups: {id: 4, name: 'Супы', selected: false},
//     salads: {id: 5, name: 'Салаты', selected: false},
// }

export const personal_data = {
    name: undefined,
    phone: undefined,
}