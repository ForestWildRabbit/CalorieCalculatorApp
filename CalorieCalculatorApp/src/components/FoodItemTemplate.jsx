import React, {useState} from 'react';
import {FoodItem as FoodItemClass, foodItems} from "./food-items/food-items.js";
import FoodItem from "./FoodItem.jsx";

const createAddToBasketLabel = (x) => {
    if (x >= 1){
        return 'Добавлено в корзину';
    }
    else{
        return `Добавлено в корзину (${x})`
    }
}
const FoodItemTemplate = ({foodItemTemplate, setSelectedFoodItems}) => {
    const [addToBasketLabel, setAddToBasketLabel] = useState(' ');
    const [itemCount, setItemCount] = useState(1);
    const handleAddToBasket = () => {
        setAddToBasketLabel(createAddToBasketLabel(itemCount));
        setItemCount(prevState => prevState + 1);

        setSelectedFoodItems(selectedFoodItems => ([
            ...selectedFoodItems,
            ...foodItemTemplate.foodItems,
        ]));

    }
    return (
        <div>
            <h3>
                {foodItemTemplate.name}
            </h3>
            <h4>Блюда ({foodItemTemplate.calories} ккал)</h4>
            {foodItemTemplate.foodItems.map((item) =>
                <FoodItem foodItem={item}
                          setSelectedFoodItems={setSelectedFoodItems} key={item.id}/>)}
            <div>
                <button className={'flex_container_horizontal button-add-template-to-basket'}
                        onClick={() => handleAddToBasket()}>
                    Добавить комплект в корзину
                </button>
            </div>
            <div className={'success_add_to_basket'}>
                {addToBasketLabel}
            </div>
        </div>

    );
};

export default FoodItemTemplate;