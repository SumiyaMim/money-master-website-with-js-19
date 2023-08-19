let balance; 
let myIncome;

// get input value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// show expenses and balance
function setElementInnerText(elementId, elementTotal){
    const element = document.getElementById(elementId)
    element.innerText = elementTotal;
}

function calculateBtn() {
    
    // get input value
    myIncome = getInputValue('my-income');
    const foodExpenses = getInputValue('food-expenses');
    const rentExpenses = getInputValue('rent-expenses');
    const clothesExpenses = getInputValue('clothes-expenses');

    // validate
    if(isNaN(myIncome) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothesExpenses)){
        alert('Please insert number');
        return;
    }

    // calculate expenses and balance
    const expenses = foodExpenses + rentExpenses + clothesExpenses;
    balance = myIncome - expenses;

    // show expenses, balance, save amount and remain balance
    setElementInnerText('show-expenses', expenses);
    setElementInnerText('show-balance', balance);
}

function saveBtn() {
    // get input value
    const savePercentage = getInputValue('save-percentage');

    // validate
    if(isNaN(savePercentage)){
        alert('Please insert number');
        return;
    }

    // calculate save amount and remain balance
    const saveAmount = (myIncome * savePercentage) / 100;
    const remainBalance =  balance - saveAmount;

    // show save amount and remain balance
    setElementInnerText('save-amount', saveAmount);
    setElementInnerText('remain-balance', remainBalance);

}