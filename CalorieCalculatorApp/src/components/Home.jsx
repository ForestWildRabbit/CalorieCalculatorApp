import {useState} from "react";
import CalculatorForm from "./forms/CalculatorForm/CalculatorForm.jsx";

const Home = () => {
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
            <CalculatorForm
                calculatorFormData={calculatorFormData}
                setCalculatorFormData={setCalculatorFormData}
                setCalculatorResult={setCalculatorResult}
            />

            <div className={'calorie_result'}>
                Суточная норма калорий = <span className={'calorie_result'}>{Math.floor(calculatorResult.calories)}</span>
            </div>
        </>
    );
};
export default Home;