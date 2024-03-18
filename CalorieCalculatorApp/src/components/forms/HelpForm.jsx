import React, {useState} from 'react';
import Header from "../Header.jsx";

const HelpForm = () => {
    const [sending, setSending] = useState(false);

    const handleOnSubmitHelpForm = (e) => {
       e.preventDefault();
       setSending(true);
    }
    return (
        <>
            <Header/>
            <div className={'flex_container_vertical'}>
                <form onSubmit={handleOnSubmitHelpForm}>
                    <div className={'flex_container_vertical'}>
                        <div className={'flex_container_horizontal_item'}>
                            <label className={'address_label'}>Опишите вашу проблему</label>
                        </div>
                        <div className={'flex_container_horizontal_item'}>
                            <textarea rows={10} cols={50} name={'problem'} required={true}>

                            </textarea>
                        </div>

                        <div className={'flex_container_horizontal_item'}>
                            <label className={'address_label'}>Укажите email для обратной связи</label>
                        </div>
                        <div className={'flex_container_horizontal_item'}>
                            <input type={"email"} className={'address_input'} name={'email'} required={true}>

                            </input>
                        </div>
                        <div className={'flex_container_horizontal_item'}>
                            <input type={"submit"} className={'order_button'} value={'Отправить'}>

                            </input>
                        </div>
                        {sending ? <div className={'success_order'}>Данные отправлены</div> : <></>}
                    </div>

                </form>
            </div>


        </>
    );
};

export default HelpForm;