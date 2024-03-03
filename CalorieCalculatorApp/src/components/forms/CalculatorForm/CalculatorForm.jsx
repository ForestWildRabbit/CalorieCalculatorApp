import {activity_map, calculateAMR, calculateBMR} from "./computing.js";

const CalculatorForm = ({
                            calculatorFormData,
                            setCalculatorFormData,
                            setCalculatorResult}) => {

    const handleCalculatorFormSubmit = (e) => {
        e.preventDefault();
        let BMR = calculateBMR(calculatorFormData);
        let AMR = calculateAMR(BMR, activity_map, calculatorFormData.activity);
        setCalculatorResult(calculatorResult => ({
                ...calculatorResult,
                calories: AMR,
        }));
    }

    const handleOnChangeGender = (e) => {
        setCalculatorFormData(calculatorFormData => ({
            ...calculatorFormData,
            gender: e.target.value,
        }));
    }

    const handleOnChangeAge = (e) => {
        setCalculatorFormData(calculatorFormData => ({
            ...calculatorFormData,
            age: Number(e.target.value),
        }));
    }
    const handleOnChangeHeight = (e) => {
        setCalculatorFormData(calculatorFormData => ({
            ...calculatorFormData,
            height: Number(e.target.value),
        }));
    }
    const handleOnChangeWeight = (e) => {
        setCalculatorFormData(calculatorFormData => ({
            ...calculatorFormData,
            weight: Number(e.target.value),
        }));
    }
    const handleOnChangeActivity = (e) => {
        setCalculatorFormData(calculatorFormData => ({
            ...calculatorFormData,
            activity: e.target.value,
        }));
    }

    return (
        <>
            <form onSubmit={handleCalculatorFormSubmit}>
                <div className={'flex_container_horizontal_item header_label'}>Общая информация</div>
                <div className={'flex_container_horizontal'}>
                    <div className={'flex_container_horizontal_item'}>
                        <input type="radio" name="gender" value='man' id={'man'}
                               checked={calculatorFormData.gender === 'man'} onChange={handleOnChangeGender}/>
                        <label htmlFor={'men'}>Мужчина</label>
                    </div>

                    <div className={'flex_container_horizontal_item'}>
                        <input type="radio" name="gender" value="woman" id={'woman'}
                               checked={calculatorFormData.gender === 'woman'} onChange={handleOnChangeGender}/>
                        <label htmlFor={'women'}>Женщина</label>
                    </div>
                </div>

                <div className={'flex_container_horizontal'}>
                    <div className={'flex_container_horizontal_item'}>
                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'age'}>Возраст</label>
                            <input type={"text"} placeholder={"0"} id={'age'} onChange={handleOnChangeAge}/>
                        </div>

                    </div>

                    <div className={'flex_container_horizontal_item'}>
                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'height'}>Рост</label>
                            <input type={"text"} placeholder={"0"} id={'height'} onChange={handleOnChangeHeight}/>
                        </div>
                    </div>

                    <div className={'flex_container_horizontal_item'}>
                        <div className={'flex_container_vertical'}>
                            <label htmlFor={'weight'}>Вес</label>
                            <input type={"text"} placeholder={"0"} id={'weight'} onChange={handleOnChangeWeight}/>
                        </div>
                    </div>
                </div>


                <div className={'flex_container_vertical'}>
                    <div className={'flex_container_horizontal_item header_label'}>Физическая активность</div>
                    <div className={'flex_container_horizontal_item flex_item_left'}>
                        <div className={'radio_element'}>
                            <input type="radio" name="min" value='min' id={'min'}
                                   checked={calculatorFormData.activity === 'min'} onChange={handleOnChangeActivity}/>
                            <label htmlFor={'min'}>
                                Минимальная
                            </label>
                        </div>
                        <div className={'subtext radio_element'}>
                            Редко выхожу из дома, почти весь день сижу
                        </div>
                    </div>

                    <div className={'flex_container_horizontal_item flex_item_left'}>
                        <div className={'radio_element'}>
                            <input type="radio" name="low" value="low" id={'low'}
                                   checked={calculatorFormData.activity === 'low'} onChange={handleOnChangeActivity}/>
                            <label htmlFor={'low'}>
                                Низкая
                            </label>
                        </div>
                        <div className={'subtext radio_element'}>
                            Хожу в магазин или недолго прогуливаюсь
                        </div>
                    </div>

                    <div className={'flex_container_horizontal_item flex_item_left'}>
                        <div className={'radio_element'}>
                            <input type="radio" name="middle" value="middle" id={'middle'}
                                   checked={calculatorFormData.activity === 'middle'}
                                   onChange={handleOnChangeActivity}/>
                            <label htmlFor={'middle'}>
                                Средняя
                            </label>
                        </div>
                        <div className={'subtext radio_element'}>
                            Ежедневно гуляю не меньше часа
                        </div>
                    </div>

                    <div className={'flex_container_horizontal_item flex_item_left'}>
                        <div className={'radio_element'}>
                            <input type="radio" name="high" value="high" id={'high'}
                                   checked={calculatorFormData.activity === 'high'} onChange={handleOnChangeActivity}/>
                            <label htmlFor={'high'}>
                                Высокая
                            </label>
                        </div>
                        <div className={'subtext radio_element'}>
                            Занимаюсь активными видами спорта 2-3 раза в неделю
                        </div>
                    </div>

                    <div className={'flex_container_horizontal_item flex_item_left'}>
                        <div className={'radio_element'}>
                            <input type="radio" name="very_high" value="very_high" id={'very_high'}
                                   checked={calculatorFormData.activity === 'very_high'}
                                   onChange={handleOnChangeActivity}/>
                            <label htmlFor={'very_high'}>
                                Очень высокая
                            </label>

                        </div>
                        <div className={'subtext radio_element'}>
                            Регулярно занимаюсь спортом минимум 5 раз в неделю
                        </div>
                    </div>
                </div>

                <div className={'flex_container_horizontal'}>
                    <input type={'submit'} value={'Рассчитать'}/>
                </div>

            </form>

        </>
    );
};


export default CalculatorForm;