import React, {useState} from "react";
import CalculatorForm from "./forms/CalculatorForm/CalculatorForm.jsx";
import Header from "./Header.jsx";
import {foodItems, foodItemsTemplates, suggestTemplate} from "./food-items/food-items.js";
import FoodItem from "./FoodItem.jsx";
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

    console.log(foodItemsTemplates);





    return (
        <>
            <Header/>
            <div className={'home_container'}>

                <div>
                    <div>
                        <h2>Комплекты питания</h2>
                        {foodItemsTemplates.map((item) =>
                            <FoodItemTemplate foodItemTemplate={item} setSelectedFoodItems={setSelectedFoodItems}/>)}
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

                    {calculatorResult?.calories &&
                        (
                            <div className={'calorie_result'} style={{marginTop: '12px'}}>
                                Мы рекомендуем вам <b>{suggestTemplate(calculatorResult.calories).name}</b>
                            </div>
                        )
                    }
                </div>




            </div>


        </>
    );
};
export default Home;