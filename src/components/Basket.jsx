import React, {useState} from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";
import {useNavigate} from "react-router-dom";

const Basket = ({selectedFoodItems, setSelectedFoodItems, orders, setOrders}) => {
    const [ordered, setOrdered] = useState(false);
    const [address, setAddress] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const navigate = useNavigate();

    const makeOrder = e => {
        e.preventDefault();
        setOrdered(true);
        setOrders([
            ...orders,
            {
                id: orders.length + 1,
                items: selectedFoodItems,
                address: address,
                deliveryTime: deliveryTime,
            },
        ]);
        setTimeout(setSelectedFoodItems, 4000, []);   // clear basket after making order
        setTimeout(() => navigate('/account'), 8000);  // to account
    }

    const onSubmitOrderForm = (event) => {
        event.preventDefault();
        makeOrder(event)
    }
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
                    <form className='order_form' onSubmit={onSubmitOrderForm}>
                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'address'}
                                   className={'flex_container_horizontal_item address_label'}>Адрес</label>
                            <input type={"text"} className={'address_input'} required={true}
                                   placeholder={'адрес доставки'} id={'address'}
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
                                   placeholder={'промокод (при наличии)'} id={'promo'}/>
                        </div>

                        <div>
                            <div className={'select_payment_label'}>
                                Выберите способ оплаты заказа
                            </div>
                            <select className={'select_payment'}>
                                <option className={'select_payment_item'}>Оплата наличными курьеру</option>
                                <option className={'select_payment_item'}>Оплата онлайн на сайте</option>
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