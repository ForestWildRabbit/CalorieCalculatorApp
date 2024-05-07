export const activity_map = {
    min: 1.2,
    low: 1.375,
    middle: 1.55,
    high: 1.725,
    very_high: 1.9,
}

export const calculateBMR = (calculatorData) => {
    if (calculatorData.gender === 'man'){
        return 88.36 + 13.4 * calculatorData.weight + 4.8 * calculatorData.height - 5.7 * calculatorData.age;
    }
    else if (calculatorData.gender === 'woman'){
        return 447.6 + 9.2 * calculatorData.weight + 3.1 * calculatorData.height - 4.3 * calculatorData.age;
    }
    else{
        return -1;
    }
};

export const calculateAMR = (BMR, activity_map, activity) => {
    return BMR * activity_map[activity];
}