window.onload = () => {
    const petrolInput = document.querySelector('#Petrol_Price'); /*loads the page keeping thee 1.72 value*/

    /*set default value*/
    petrolInput.value = 1.72;
    petrolInput.readOnly = true; /*keeps it as read only in order to make sure that price remains fixed.*/
    
}
/*where calculation takes place*/
function calculate () {
    const Petrol_Price = parseFloat(document.querySelector('#Petrol_Price').value); /*gets the current petrol price and converts to a number*/
    const liters = parseFloat(document.querySelector('#liters').value);/*gets the number of liters entered and converts to a number*/

    /*stops the function if either value is not there*/
    if (!Petrol_Price || !liters) return;

    document.querySelector('#totalAmount').innerText = (Petrol_Price * liters).toFixed(2); /*calculates total and displays it on the page with 2 decimal places*/
}