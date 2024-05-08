import React from 'react';
import {calculate_price, get_coefficient_discount} from "../food-items/food-items.js";

const calories_sum = (items) => {
    let calories = 0;
    for (let item of items){
        calories += item.calories;
    }
    return calories;
};

const Order = ({order}) => {
    console.log(order);
    return (
        <>
            <h3>
                Заказ #{order.id}
            </h3>
            <div className={'ordered_item_container'}>
                <div className={'ordered_item'}>
                    {order.items.map(fooditem => (
                        <div key={fooditem.id}>{fooditem.name}</div>
                    ))}
                </div>
                <div className={'ordered_item'}>
                    Калорийность: {calories_sum(order.items)} ккал
                    <div>
                        Стоимость: {calculate_price(order.items) * get_coefficient_discount(order.promo)}₽
                    </div>
                </div>

                <div className={'ordered_item'}>
                    Адрес: {order.address}
                    <div>
                        Время: {order.deliveryTime}
                    </div>
                </div>


            </div>

        </>

    );
};

export default Order;