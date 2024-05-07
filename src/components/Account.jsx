import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";
import Order from "./forms/Order.jsx";
import RegisterForm from "./forms/RegisterForm.jsx";

const Account = ({orders, personalData, setPersonalData}) => {
    const [calories, setCalories] = useState('');
    useEffect(() => {
        let my_calories = localStorage.getItem('calories');
        if (my_calories){
            setCalories(my_calories);
        }

    }, []);
    return (
        <>
            <Header/>
            <RegisterForm personalData={personalData} setPersonalData={setPersonalData}/>
            {calories &&
                (
                <h3>
                    Моя дневная норма калорий = {calories} ккал
                </h3>
                )
            }

            <h2>
                Мои заказы
            </h2>
            {orders.toSorted((order1, order2) => order2.id - order1.id).map((orderItem) =>
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