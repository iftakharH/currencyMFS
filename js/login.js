
//step 1: set event handler for login button
document.getElementById('button-login').addEventListener('click', function (event) { 
    
    //step 2: prevent default form submission(prevent reloading browser)
    event.preventDefault();

    //step 3: get user input
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;



    console.log(phoneNumber, pinNumber);

    // step 4: validate user input
    if (phoneNumber === '1234' && pinNumber === '1234') {
        //step 5: redirect to dashboard page
        console.log('Login successful');

        window.location.href = '/home.html';
    }
    
    else {
        //step 6: show error message
        alert('Invalid phone number or pin number');
    }
});

document.getElementById('button-login').addEventListener('click', function (event) {

});