import {useState} from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    const changeInputValue = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <>
            <div>
                Home
            </div>
            <form>
                <input type={"text"} placeholder={"input something"} onChange={changeInputValue}/>
            </form>
            <div>
                input value = {inputValue}
            </div>
        </>
    );
};
export default Home;