let totalPrice = 0
function clickOnCard(target) {
    // Display card Name
    const textElement = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = textElement
    // li.innerHTML = `${count + 1}.   ${text} `
    const selectedText = document.getElementById('selected-item-list')
    selectedText.appendChild(li)

    // calculated the card value
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    totalPrice = parseFloat(totalPrice) + parseFloat(price)
    if (totalPrice > 0) {
        enableButton('btn-purchase')
    }
    if (totalPrice >= 200) {
        enableButton('btn-apply')
    }

    // Display calculation on the card
    const itemPrice = totalPrice.toFixed(2)
    document.getElementById('total-price').innerText = itemPrice + 'TK'
    document.getElementById('total').innerText = itemPrice + 'TK'

}

// make button enable
function enableButton(btnId) {
    const btnEnable = document.getElementById(btnId)
    btnEnable.removeAttribute('disabled')
    btnEnable.style.backgroundColor = ''
    btnEnable.style.cursor = 'pointer'
}

function applyButton() {
    const inputField = document.getElementById('input-coupon')
    const inputValue = inputField.value
    inputField.value =''
    if (inputValue === 'SELL200') {
        const discountPrice = (totalPrice * 20) / 100
        console.log('Discount:', discountPrice)
    }else{
       alert('Please Insert Valid Coupon Code')
    }
}