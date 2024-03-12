import React, {useState} from 'react';
import Header from "./Header.jsx";
import {foodItems} from "./food-items/food-items.js";
import SelectedFoodItem from "./SelectedFoodItem.jsx";

const Basket = ({selectedFoodItems, setSelectedFoodItems}) => {
    const [ordered, setOrdered] = useState(false);
    console.log(selectedFoodItems);
    const makeOrder = e => {
        e.preventDefault();
        setOrdered(true);
    }
    return (
        <>
            <Header/>

            {selectedFoodItems.length
                ?
                <div className={'flex_container_vertical'}>

                    <h2>Заказ</h2>
                    {selectedFoodItems.map((selectedFoodItem, key = selectedFoodItem.id) =>
                        <SelectedFoodItem selectedFoodItem={selectedFoodItem}
                                          selectedFoodItems={selectedFoodItems}
                                          setSelectedFoodItems={setSelectedFoodItems}/>)}

                    <div className={'flex_container_vertical'}>
                        <label htmlFor={'address'}
                               className={'flex_container_horizontal_item address_label'}>Адрес</label>
                        <input type={"text"} className={'address_input'}
                               placeholder={'адрес доставки'} id={'address'}/>
                    </div>

                    <div className={'flex_container_horizontal'}>
                        <input type={'submit'} className={'order_button'} value={'Заказать'}
                               onClick={makeOrder}/>
                    </div>
                    {ordered ? <div className={'success_order'}>Заказ оформлен</div> : <></>}

                </div>
                : <div>Корзина пуста</div>}


        </>
    );
};

export default Basket;