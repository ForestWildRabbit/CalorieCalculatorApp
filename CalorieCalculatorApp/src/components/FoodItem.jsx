import {FoodItem as FoodItemClass} from "./food-items/food-items.js";
import {useState} from "react";

const createAddToBasketLabel = (x) => {
    if (x === 1){
        return 'Добавлено в корзину';
    }
    else{
        return `Добавлено в корзину (${x})`
    }
}
const FoodItem = ({foodItem, selectedFoodItems, setSelectedFoodItems}) => {

    const [addToBasketLabel, setAddToBasketLabel] = useState(' ');
    const [itemCount, setItemCount] = useState(1);

    const handleAddToBasket = () => {
        setAddToBasketLabel(createAddToBasketLabel(itemCount));
        setItemCount(prevState => prevState + 1);
        console.log(itemCount);

        setSelectedFoodItems(selectedFoodItems => ([
            ...selectedFoodItems,
            new FoodItemClass(selectedFoodItems.length + 1,
                foodItem.name, foodItem.image_url, foodItem.calories),
        ]));
    }

    return (
        <>
            <div className={'food-item'}>
                <div className={'flex_container_horizontal_item'}>
                    <img src={foodItem.image_url} alt={''} className={'food-image'}/>
                </div>
                <div className={'food-info'}>
                    <div>{foodItem.name}</div>
                    <div>Калорийность: {foodItem.calories}ккал</div>
                    <div>
                        <button className={'flex_container_horizontal button-add-to-basket'}
                                onClick={() => handleAddToBasket()}>
                            Добавить в корзину
                        </button>
                    </div>
                    <div className={'success_add_to_basket'}>
                        {addToBasketLabel}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodItem;