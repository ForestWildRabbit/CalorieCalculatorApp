
const SelectedFoodItem = ({selectedFoodItem, selectedFoodItems, setSelectedFoodItems}) => {
    const handleDeleteFromBasket = () => {

        setSelectedFoodItems(selectedFoodItems => selectedFoodItems.filter(
            item => item.id !== selectedFoodItem.id
        ));
    }


    return (
        <>
            <div className={'food-item'}>
                <div className={'flex_container_horizontal_item'}>
                    <img src={selectedFoodItem.image_url} alt={''} className={'food-image'}/>
                </div>
                <div className={'food-info'}>
                    <div>{selectedFoodItem.name}</div>
                    <div>Калорийность: {selectedFoodItem.calories} ккал</div>
                    <div>Стоимость: {selectedFoodItem.price}₽</div>
                    <div>
                        <button className={'flex_container_horizontal button-add-to-basket'}
                                onClick={() => handleDeleteFromBasket()}>
                            Удалить из корзины
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedFoodItem;