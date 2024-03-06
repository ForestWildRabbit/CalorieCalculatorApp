import React from 'react';
import Header from "./Header.jsx";
import {foodItems} from "./food-items/food-items.js";
import SelectedFoodItem from "./SelectedFoodItem.jsx";

const Basket = ({selectedFoodItems, setSelectedFoodItems}) => {
    console.log(selectedFoodItems);
    return (
        <>
            <Header/>
            {selectedFoodItems.length
                ? <div>
                    {selectedFoodItems.map((selectedFoodItem, key = selectedFoodItem.id) =>
                        <SelectedFoodItem selectedFoodItem={selectedFoodItem}
                                          selectedFoodItems={selectedFoodItems}
                                          setSelectedFoodItems={setSelectedFoodItems}/>)}
                    </div>
                : <div>Корзина пуста</div>}


        </>
    );
};

export default Basket;