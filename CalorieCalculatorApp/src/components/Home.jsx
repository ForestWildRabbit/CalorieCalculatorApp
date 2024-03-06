import React, {useState} from "react";
import CalculatorForm from "./forms/CalculatorForm/CalculatorForm.jsx";
import Header from "./Header.jsx";
import {foodItems} from "./food-items/food-items.js";
import FoodItem from "./FoodItem.jsx";

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





    return (
        <>
            <Header/>
            <div className={'home_container'}>

                <div>
                    <h3>
                        Блюда
                    </h3>
                    {foodItems.map((item, key = item.id) =>
                        <FoodItem foodItem={item} selectedFoodItems={selectedFoodItems}
                        setSelectedFoodItems={setSelectedFoodItems}/>)}
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
                </div>

            </div>


        </>
    );
};
export default Home;