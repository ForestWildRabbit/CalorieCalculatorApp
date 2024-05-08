import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";
import {useNavigate} from "react-router-dom";
import {calculate_calories, calculate_price, get_coefficient_discount} from "./food-items/food-items.js";

const Basket = ({selectedFoodItems, setSelectedFoodItems, orders, setOrders, setCurrentOrder}) => {
    const [ordered, setOrdered] = useState(false);
    const [address, setAddress] = useState(localStorage?.personalData ?
        JSON.parse(localStorage?.personalData)?.address : '');

    const [deliveryTime, setDeliveryTime] = useState('');
    const [promo, setPromo] = useState('');
    const [orderPrice, setOrderPrice] = useState(0);
    const [orderCalories, setOrderCalories] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('online');
    const navigate = useNavigate();

    const makeOrder = e => {
        e.preventDefault();
        if (paymentMethod === 'offline'){
            setOrdered(true);
            setOrders([
                ...orders,
                {
                    id: orders.length + 1,
                    items: selectedFoodItems,
                    address: address,
                    deliveryTime: deliveryTime,
                    promo: promo,
                },
            ]);
            setTimeout(setSelectedFoodItems, 4000, []);   // clear basket after making order
            setTimeout(() => navigate('/account'), 8000);  // to account
        }
        if (paymentMethod === 'online'){
            setCurrentOrder({
                id: orders.length + 1,
                items: selectedFoodItems,
                address: address,
                deliveryTime: deliveryTime,
                promo: promo,
            });
            setTimeout(() => navigate('/payment'), 1500);  // to payment
        }

    }

    const handleOnChangePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }

    const onSubmitOrderForm = (event) => {
        event.preventDefault();
        makeOrder(event)
    }

    useEffect(() => {
        setOrderPrice(calculate_price(selectedFoodItems) * get_coefficient_discount(promo));
        setOrderCalories(calculate_calories(selectedFoodItems));
    }, [selectedFoodItems, promo])


    return (
        <>
            <Header/>

            {selectedFoodItems.length
                ?
                <div className={'flex_container_vertical'}>

                    <h2>Текущий заказ</h2>
                    {selectedFoodItems.map((selectedFoodItem) =>
                        <SelectedFoodItem selectedFoodItem={selectedFoodItem}
                                          selectedFoodItems={selectedFoodItems}
                                          setSelectedFoodItems={setSelectedFoodItems}
                                          key={selectedFoodItem.id}
                        />)}

                    <div className={'address_label'}>
                        {orderCalories ? `Калорийность заказа: ${orderCalories} ккал` : ''}
                    </div>
                    <div className={'address_label'}>
                        {orderPrice ? `Цена заказа: ${orderPrice}₽` : ''}
                    </div>

                    <form className='order_form' onSubmit={onSubmitOrderForm}>
                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'address'}
                                   className={'flex_container_horizontal_item address_label'}>Адрес</label>
                            <input type={"text"} className={'address_input'} required={true}
                                   placeholder={'адрес доставки'} id={'address'}
                                   defaultValue={localStorage?.personalData ?
                                       JSON.parse(localStorage?.personalData)?.address : ''}
                                   onChange={(e) => setAddress(e.target.value)}/>
                        </div>

                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'deliveryTime'}
                                   className={'flex_container_horizontal_item address_label'}>Время</label>
                            <input type={"text"} className={'address_input'} required={true}
                                   placeholder={'время доставки'} id={'deliveryTime'}
                                   onChange={(e) => setDeliveryTime(e.target.value)}/>
                        </div>

                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'promo'}
                                   className={'flex_container_horizontal_item address_label'}>Промокод</label>
                            <input type={"text"} className={'address_input'}
                                   placeholder={'промокод (при наличии)'} id={'promo'}
                                   onChange={(e) => setPromo(e.target.value)}/>
                        </div>

                        <div>
                            <div className={'select_payment_label'}>
                                Выберите способ оплаты заказа
                            </div>
                            <select className={'select_payment'} onChange={handleOnChangePaymentMethod}>
                                <option className={'select_payment_item'} value={'online'}>Оплата онлайн на сайте</option>
                                <option className={'select_payment_item'} value={'offline'}>Оплата наличными курьеру</option>
                            </select>
                        </div>


                        <div className={'flex_container_horizontal'} style={{marginTop: '12px'}}>
                            <input type={'submit'} className={'order_button'} value={'Заказать'}/>
                        </div>
                    </form>
                    {ordered ? <div className={'success_order'}>Заказ оформлен</div> : <></>}

                </div>
                : <h2>Корзина пуста</h2>}


        </>
    );
};

export default Basket;