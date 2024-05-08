import './App.css'
import './styles/globals.scss'
import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Account from "./components/Account.jsx";
import Basket from "./components/Basket.jsx";
import {useEffect, useState} from "react";
import HelpForm from "./components/forms/HelpForm.jsx";
import {personal_data} from "./components/food-items/food-items.js";
import ECardForm from "./components/forms/ECardForm.jsx";

function App() {

    const [selectedFoodItems, setSelectedFoodItems] = useState(
        localStorage?.selectedFoodItems ? JSON.parse(localStorage.selectedFoodItems) : []);

    const [orders, setOrders] = useState(
        localStorage?.orders ? JSON.parse(localStorage.orders) : []);

    const [currentOrder, setCurrentOrder] = useState({});

    const [personalData, setPersonalData] = useState(localStorage?.personalData
        ? JSON.parse(localStorage.personalData)
        : personal_data);

    useEffect(() => {
        if (selectedFoodItems){
            localStorage.setItem('selectedFoodItems', JSON.stringify(selectedFoodItems));
        }
        if (orders){
            localStorage.setItem('orders', JSON.stringify(orders));
        }
        if (personalData){
            localStorage.setItem('personalData', JSON.stringify(personalData));
        }

    }, [selectedFoodItems, orders, personalData])



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Home selectedFoodItems={selectedFoodItems} setSelectedFoodItems={setSelectedFoodItems}/>}>

                    </Route>

                    <Route path="/basket" element={
                        <Basket selectedFoodItems={selectedFoodItems} setSelectedFoodItems={setSelectedFoodItems}
                        orders={orders} setOrders={setOrders} setCurrentOrder={setCurrentOrder}/>}>

                    </Route>

                    <Route path="/help" element={<HelpForm/>}></Route>

                    <Route path="/account"
                           element={<Account orders={orders} personalData={personalData}
                                             setPersonalData={setPersonalData}/>}></Route>

                    <Route path="/payment" element={
                        <ECardForm personalData={personalData} setPersonalData={setPersonalData}
                                   currentOrder={currentOrder} setOrders={setOrders}
                                   setSelectedFoodItems={setSelectedFoodItems}/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
