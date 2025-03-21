
//add money to the account


//step 1: add an event handler for the add money button
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    //step 2: prevent default form submission(prevent reloading browser)
    event.preventDefault();

    //step 3: get user input
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //step 4: validate user input
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    //step 5: verify pin number
    if (pinNumberInput === '1234') {
        console.log('Add money successful');

        //step 6: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        //step 7: add the input money to the current balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        // alert('Money added successfully');
        
        //step 8: update the balance
        document.getElementById('account-balance').innerText = newBalance;

        
    }
    else {
        console.log('Add money failed');
        alert('Invalid pin number');
    }
});