import {useState} from "react";
import Header from "../Header.jsx";
import {calculate_price, get_coefficient_discount} from "../food-items/food-items.js";
import {useNavigate} from "react-router-dom";


const ECardForm = ({personalData, setPersonalData, currentOrder, setOrders, setSelectedFoodItems}) => {
    const [cardNumber, setCardNumber] = useState(personalData?.cardNumber ?
        personalData.cardNumber : '');
    const [cardholder, setCardholder] = useState(personalData?.cardholder ?
        personalData.cardholder : '');
    const [cardExpiration, setCardExpiration] = useState(personalData?.cardExpiration ?
        personalData.cardExpiration : '');
    const [CVV, setCVV] = useState(personalData?.CVV ?
        personalData.CVV : '');
    const navigate = useNavigate();

    const orderPrice = currentOrder?.items ?
        calculate_price(currentOrder.items) * get_coefficient_discount(currentOrder.promo) : 0;
    const [connectionLabel, setConnectionLabel] = useState('');


    const clearCardData = () => {
        setCardNumber('');
        setCardholder('');
        setCardExpiration('');
        setCVV('');
    }

    const handleOnChangeCardNumber = (e) => {
        let addSpace = false;
        if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14){
            addSpace = true;
        }
        if (addSpace){
            setCardNumber(prev => {
                if (prev.length < e.target.value.length){
                    return `${e.target.value} `
                }
                if (prev.length > e.target.value.length){
                    return e.target.value.slice(0, -1)
                }

            });
        } else {
            setCardNumber(e.target.value);
        }
    }

    const handleOnChangeCardExpiration = (e) => {
        let addSlash = false;
        if (e.target.value.length === 2){
            addSlash = true;
        }
        if (addSlash){
            setCardExpiration(prev => {
                if (prev.length < e.target.value.length){
                    return `${e.target.value}/`
                }
                if (prev.length > e.target.value.length){
                    return e.target.value.slice(0, -1)
                }
            })
        } else {
            setCardExpiration(e.target.value);
        }
    }

    const handleOnChangeCardholder = (e) => {
        setCardholder(e.target.value);
    }
    const handleOnChangeCVV = (e) => {
        setCVV(e.target.value);
    }

    const handleOnClickSave = () => {
        setPersonalData(
            {
                ...personalData,
                cardholder: cardholder,
                cardNumber: cardNumber,
                cardExpiration: cardExpiration,
                CVV: CVV,
            }
        )
    }

    const handleOnClickClear = () => {
        clearCardData();
        setPersonalData(
            {
                ...personalData,
                cardholder: undefined,
                cardNumber: undefined,
                cardExpiration: undefined,
                CVV: undefined,
            }
        )
    }

    const handleOnClickPay = () => {
        setTimeout(setConnectionLabel, 500, ['Обработка данных...']);
        setTimeout(setConnectionLabel, 1000, ['Устанавливается соединение с банком...']);
        setTimeout(setConnectionLabel, 2500, ['Совершение транзакции...']);
        setTimeout(setConnectionLabel, 4000, ['Платеж совершен']);
        setTimeout(() => setSelectedFoodItems([]), 5000);
        setTimeout(() => setOrders(prev => [...prev, currentOrder]), 5000);
        setTimeout(() => navigate('/account'), 6000);
    }

    return (
        <div>
            <Header/>
            <h2>Данные электронной карты</h2>
            <div className={'credit_card_form'}>
                <div className={'credit_card'}>
                    <div className={'credit_card_container'}>
                        <div className={'flex_container_horizontal'}>
                            <div className={'credit_card_show_item'} id={'credit_card_number_show'}>
                                {cardNumber ? cardNumber : '.... .... .... ....'}
                            </div>
                        </div>
                    </div>

                    <div className={'credit_card_container'}>

                        <div className={'flex_container_horizontal'}>
                            <div className={'credit_card_show_item'}>
                                <div className={'credit_card_show_label'}>
                                    Cardholder
                                </div>
                                <div>
                                    {cardholder ? cardholder : '........'}
                                </div>
                            </div>
                            <div className={'credit_card_show_item'}>
                                <div className={'credit_card_show_label'}>
                                    Exp
                                </div>
                                <div>
                                    {cardExpiration ? cardExpiration : '../..'}
                                </div>
                            </div>
                            <div className={'credit_card_show_item'}>
                                <div className={'credit_card_show_label'}>
                                    CVV
                                </div>
                                <div>
                                    {CVV ? '*'.repeat(CVV.length) : '...'}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={'flex_container_horizontal'}>
                    <div className={'credit_card_form_item'}>
                        <div className={'credit_card_form_label'}>
                            Номер
                        </div>
                        <div>
                            <input type={'text'} onChange={handleOnChangeCardNumber} maxLength={19}
                                   className={'credit_card_input credit_card_input_left_column'}
                                   value={cardNumber}/>
                        </div>
                    </div>
                    <div className={'credit_card_form_item'}>
                        <div className={'credit_card_form_label'}>
                            Срок
                        </div>
                        <div>
                            <input type={'text'} onChange={handleOnChangeCardExpiration} maxLength={5}
                                   className={'credit_card_input credit_card_input_right_column'}
                                   value={cardExpiration}/>
                        </div>
                    </div>
                </div>

                <div className={'flex_container_horizontal'}>
                    <div className={'credit_card_form_item'}>
                        <div className={'credit_card_form_label'}>
                            Имя
                        </div>
                        <div>
                            <input type={'text'} onChange={handleOnChangeCardholder}
                                   className={'credit_card_input credit_card_input_left_column'}
                                   value={cardholder}/>
                        </div>
                    </div>
                    <div className={'credit_card_form_item'}>
                        <div className={'credit_card_form_label'}>
                            CVV
                        </div>
                        <div>
                            <input type={'password'} onChange={handleOnChangeCVV} maxLength={3}
                                   className={'credit_card_input credit_card_input_right_column'}
                                   value={CVV}/>
                        </div>
                    </div>
                </div>

                <div className={'credit_card_form_button_container'}>
                    <div className={'flex_container_horizontal'}>
                        <div className={'credit_card_form_button'}>
                            <button onClick={handleOnClickSave}>Сохранить</button>
                        </div>
                        <div className={'credit_card_form_button'}>
                            <button onClick={handleOnClickClear}>Очистить</button>
                        </div>
                    </div>
                </div>


                <div className={'credit_card_form_label'} style={{marginTop: 8}}>
                    Сумма к оплате {orderPrice}₽
                </div>


                <div className={'credit_card_form_button_container'}>
                    <button className={'payment_button'} onClick={handleOnClickPay}>
                        Оплатить заказ
                    </button>
                </div>

                <div className={'credit_card_form_label'}>
                    {connectionLabel? connectionLabel : ''}
                </div>


            </div>

        </div>
    );
};

export default ECardForm;