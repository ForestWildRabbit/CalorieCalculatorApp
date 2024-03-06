import {FoodItem as FoodItemClass} from "./food-items/food-items.js";
const FoodItem = ({foodItem, selectedFoodItems, setSelectedFoodItems}) => {

    const handleAddToBasket = () => {

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
                </div>
            </div>
        </>
    );
};

export default FoodItem;