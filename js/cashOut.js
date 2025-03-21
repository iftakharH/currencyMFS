
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    

    //console.log(cashOut, pinNumber);

    if (isNaN(cashOutNumber)) {
        alert('Failed to cash out');
        return;
    }

    //wrong way to verify pin number
    if (pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        console.log(balance);

        if (cashOutNumber > balanceNumber) {
            alert('Insufficient balance');
            return;
        }

        //reduce the input money from the current balance
        const newBalance = balanceNumber - cashOutNumber;

        //update the UI with the new balance
        document.getElementById('account-balance').innerText = newBalance;
    
        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdraw. New Balance${newBalance}</p>
        `;

        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Failed to cash out. Try again');
    }
});