import React, {useState} from "react";
import CalculatorForm from "./forms/CalculatorForm/CalculatorForm.jsx";
import Header from "./Header.jsx";
import {foodItemsTemplates, suggestTemplate} from "./food-items/food-items.js";
import FoodItemTemplate from "./FoodItemTemplate.jsx";

const Home = ({selectedFoodItems, setSelectedFoodItems}) => {
    const [calculatorFormData, setCalculatorFormData] = useState({
        gender: 'man',
        age: 0,
        height: 0,
        weight: 0,
        activity: 'min',
    });

    const [calculatorResult, setCalculatorResult] = useState({
        calories: 0,
    });

    const [successfulSave, setSuccessfulSave] = useState(false);


    const onClickSaveCaloriesResult = () => {
        localStorage.setItem('calories',
            JSON.stringify(Math.floor(calculatorResult.calories)));
        setSuccessfulSave(true);
    }


    return (
        <>
            <Header/>
            <div className={'home_container'}>

                <div>
                    <div>
                        <h2>Комплекты питания</h2>
                        {foodItemsTemplates.map((item) =>
                            <FoodItemTemplate foodItemTemplate={item}
                                              setSelectedFoodItems={setSelectedFoodItems}
                                              key={item.id}
                            />)}
                    </div>
                </div>

                <div>
                    <CalculatorForm
                        calculatorFormData={calculatorFormData}
                        setCalculatorFormData={setCalculatorFormData}
                        setCalculatorResult={setCalculatorResult}
                    />
                    <div className={'calorie_result'}>
                        Суточная норма калорий = <span
                        className={'calorie_result'}>{Math.floor(calculatorResult.calories)}</span>
                    </div>

                    <div className={'calorie_result_button_container'}>
                        <button className={'flex_container_horizontal button-add-template-to-basket'}
                                onClick={onClickSaveCaloriesResult}>
                            Сохранить результат
                        </button>
                    </div>
                    {successfulSave &&
                    <div className={'success_add_to_basket'}>
                        Результат сохранен
                    </div>
                    }


                    {calculatorResult?.calories ?

                        <div className={'calorie_result'} style={{marginTop: '12px'}}>
                            Мы рекомендуем вам <b>{suggestTemplate(calculatorResult.calories).name}</b>
                        </div>
                        :
                        <div className={'calorie_result_default_text'}>
                            Для рекомендации комплекта рассчитайте суточную норму калорий
                        </div>
                    }
                </div>
            </div>

        </>
    );
};
export default Home;