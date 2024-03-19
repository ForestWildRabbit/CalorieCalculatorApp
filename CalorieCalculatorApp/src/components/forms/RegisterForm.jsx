
const RegisterForm = ({personalData, setPersonalData}) => {

    const handleOnSubmitRegisterForm = (e) => {
        e.preventDefault();
        localStorage.setItem('personalData', JSON.stringify(personalData));
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
    const handleOnChangePreference = (e) => {
        setPersonalData(
            {...personalData,
                preferences: {
                    ...personalData.preferences,
                    [e.target.name]:{
                        ...personalData.preferences[e.target.name],
                        selected: e.target.checked,
                    }
                }
            },
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
                <label className={'address_label'}>Предпочтения</label>

                <div className={'flex_container_horizontal_item checkbox_container'}>
                    <input type="checkbox" name="meat" onChange={handleOnChangePreference}
                           checked={personalData.preferences.meat.selected}
                    />
                    <label>Мясо</label>
                </div>
                <div className={'flex_container_horizontal_item checkbox_container'}>
                    <input type="checkbox" name="fish" onChange={handleOnChangePreference}
                           checked={personalData.preferences.fish.selected}
                    />
                    <label>Рыба</label>
                </div>
                <div className={'flex_container_horizontal_item checkbox_container'}>
                    <input type="checkbox" name="vegetarian" onChange={handleOnChangePreference}
                           checked={personalData.preferences.vegetarian.selected}
                    />
                    <label>Вегетарианские блюда</label>
                </div>
                <div className={'flex_container_horizontal_item checkbox_container'}>
                    <input type="checkbox" name="soups" onChange={handleOnChangePreference}
                           checked={personalData.preferences.soups.selected}
                    />
                    <label>Супы</label>
                </div>
                <div className={'flex_container_horizontal_item checkbox_container'}>
                    <input type="checkbox" name="salads" onChange={handleOnChangePreference}
                           checked={personalData.preferences.salads.selected}
                    />
                    <label>Салаты</label>
                </div>
                <div className={'flex_container_horizontal_item'}>
                    <input type={"submit"} className={'order_button'} value={'Сохранить'}>

                    </input>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;