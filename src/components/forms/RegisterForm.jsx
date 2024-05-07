import React, {useState} from "react";

const RegisterForm = ({personalData, setPersonalData}) => {
    const [successfulRegister, setSuccessfulRegister] = useState(false);
    const handleOnSubmitRegisterForm = (e) => {
        e.preventDefault();
        localStorage.setItem('personalData', JSON.stringify(personalData));
        setSuccessfulRegister(true);
        console.log(personalData);
    }

    const handleOnChangeAccountData = (e) => {
        setPersonalData(
            {
                ...personalData,
                [e.target.name]: e.target.value,
            }
        )
    }


    return (
        <div className={'register_form_container'}>
            <form onSubmit={handleOnSubmitRegisterForm}>
                <label className={'address_label'}>Персональные данные</label>
                <div className={'flex_container_horizontal_item'}>
                    <input type={"text"} className={'address_input'} name={'name'} placeholder={'Имя'}
                           onChange={handleOnChangeAccountData} value={personalData.name ? personalData.name : ''}>
                    </input>
                </div>
                <div className={'flex_container_horizontal_item'}>
                    <input type={"text"} className={'address_input'} name={'phone'} placeholder={'Телефон'}
                           onChange={handleOnChangeAccountData} value={personalData.phone ? personalData.phone : ''}>
                    </input>
                </div>

                <div className={'flex_container_horizontal_item'}>
                    <input type={"submit"} className={'order_button'} value={'Сохранить'}>

                    </input>
                </div>
                {successfulRegister &&
                    <div className={'success_order'}>Данные сохранены</div>
                }
            </form>
        </div>
    );
};

export default RegisterForm;