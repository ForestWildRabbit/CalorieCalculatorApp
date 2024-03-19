import './App.css'
import './styles/globals.scss'
import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Account from "./components/Account.jsx";
import Basket from "./components/Basket.jsx";
import {useState} from "react";
import HelpForm from "./components/forms/HelpForm.jsx";

function App() {

    const [selectedFoodItems, setSelectedFoodItems] = useState([]);

    const [orders, setOrders] = useState([]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Home selectedFoodItems={selectedFoodItems} setSelectedFoodItems={setSelectedFoodItems}/>}>

                    </Route>

                    <Route path="/basket" element={
                        <Basket selectedFoodItems={selectedFoodItems} setSelectedFoodItems={setSelectedFoodItems}
                        orders={orders} setOrders={setOrders}/>}>

                    </Route>

                    <Route path="/help" element={<HelpForm/>}></Route>

                    <Route path="/account" element={<Account orders={orders}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
