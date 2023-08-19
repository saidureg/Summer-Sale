function clickOnCard(target) {
    const textElement = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = textElement
    // li.innerHTML = `${count + 1}.   ${text} `
    const selectedText = document.getElementById('selected-item-list')
    selectedText.appendChild(li)
    // console.log(selectedText)
}