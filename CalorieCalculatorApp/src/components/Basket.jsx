import React, {useState} from 'react';
import Header from "./Header.jsx";
import SelectedFoodItem from "./SelectedFoodItem.jsx";

const Basket = ({selectedFoodItems, setSelectedFoodItems, orders, setOrders}) => {
    const [ordered, setOrdered] = useState(false);
    const [address, setAddress] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');

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

                    <div className={'flex_container_horizontal'}>
                        <input type={'submit'} className={'order_button'} value={'Заказать'}
                               onClick={makeOrder}/>
                    </div>
                    {ordered ? <div className={'success_order'}>Заказ оформлен</div> : <></>}

                </div>
                : <h2>Корзина пуста</h2>}


        </>
    );
};

export default Basket;