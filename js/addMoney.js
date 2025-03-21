/**
 * Add money to the Balance after validating the pin number
 * 
* 1. add event listener to the add money button (form submit) to preventDefault form submission
* 2. get the money input from the user
* 3. validate the pin number input from the user. For wrong pin number, alert the user, for correct pin number, allow the user to add money
* 4. get the current balance from the account
* 5. add the input money to the current balance
* 6. update the balance in the account/DOM
*
**/

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    //get the money and the pin input from the user
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    
    if (pinNumber === '1234') {
        //add the money to the balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        //add the input money to the current balance
        const newBalance = balanceNumber + addMoneyNumber;

        //update the balance in the account
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Invalid pin number');
    }
});