import React from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";
import Order from "./forms/Order.jsx";

const Account = ({orders}) => {
    return (
        <>
            <Header/>
            <h2>
                Мои заказы
            </h2>
            {orders.map((orderItem) =>
                <Order
                    order={orderItem}
                    key={orderItem.id}
                />)}
        </>
    );
};

export default Account;