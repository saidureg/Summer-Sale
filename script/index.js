let totalPrice = 0
function clickOnCard(target) {
    // Display card Name
    const textElement = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = textElement
    const selectedText = document.getElementById('selected-item-list')
    selectedText.appendChild(li)

    // calculated the card value
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    totalPrice = parseFloat(totalPrice) + parseFloat(price)

    // check total price is greater than zero or not
    if (totalPrice > 0) {
        enableButton('btn-purchase')
    }
    // check total price is greater than and equal 200 or not
    if (totalPrice >= 200) {
        enableButton('btn-apply')
    }

    // Display calculation on the card
    const itemPrice = totalPrice.toFixed(2)
    document.getElementById('total-price').innerText = itemPrice + 'TK'
    document.getElementById('total').innerText = itemPrice + 'TK'

}

// set enable when this function call
function enableButton(btnId) {
    const btnEnable = document.getElementById(btnId)
    btnEnable.removeAttribute('disabled')
    btnEnable.style.backgroundColor = ''
    btnEnable.style.cursor = 'pointer'
}

// when apply button clicked
function applyButton() {

    // get value from input field
    const inputField = document.getElementById('input-coupon')
    const inputValue = inputField.value
    inputField.value =''

    // check the coupon code and calculated the discount and total price
    if (inputValue === 'SELL200') {

        // calculated the discount price
        const discountPrice = (totalPrice * 20) / 100
        console.log('Discount:', discountPrice)

        // Update the discount price display in the HTML
        const discountPriceDisplay = document.getElementById('discount-price');
        discountPriceDisplay.textContent = discountPrice.toFixed(2) + 'TK';

        // Recalculate total price after applying discount
        const finalTotalPrice = totalPrice - discountPrice;
        document.getElementById('total').textContent = finalTotalPrice.toFixed(2) + 'TK';
    }else{
       alert('Please Insert Valid Coupon Code')
    }
}

// reset value and display prices
function resetValues() {
    // Reset calculated values
    totalPrice = 0;
    const selectedText = document.getElementById('selected-item-list');
    selectedText.innerHTML = '';

    // Reset displayed prices
    document.getElementById('total-price').innerText = '0.00TK';
    document.getElementById('discount-price').innerText = '0.00TK';
    document.getElementById('total').innerText = '0.00TK';

    // Reset buttons
    const btnPurchase = document.getElementById('btn-purchase');
    btnPurchase.setAttribute('disabled', true);
    btnPurchase.style.cursor = 'not-allowed'
    const btnApply = document.getElementById('btn-apply');
    btnApply.setAttribute('disabled', true);
    btnApply.style.cursor = 'not-allowed'
}
