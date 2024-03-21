import React from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";
import Order from "./forms/Order.jsx";
import RegisterForm from "./forms/RegisterForm.jsx";

const Account = ({orders, personalData, setPersonalData}) => {
    return (
        <>
            <Header/>
            <RegisterForm personalData={personalData} setPersonalData={setPersonalData}/>
            <h2>
                Мои заказы
            </h2>
            {orders.map((orderItem) =>
                <div className={'order_container'} key={orderItem.id}>
                    <Order
                        order={orderItem}
                    />
                </div>
            )}
        </>
    );
};

export default Account;