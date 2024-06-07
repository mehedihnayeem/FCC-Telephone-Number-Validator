const userInput = document.querySelector('#user-input')
const resultTextArea = document.querySelector('#result-div')
const checkBtn = document.querySelector('#check-btn')
const clearBtn = document.querySelector('#clear-btn')

checkBtn.addEventListener('click', ()=>{
    if(userInput.value == ''){
        alert("Please provide a phone number")
        return
    }

    const regex = new RegExp(`^(1\\s?)?((\\([0-9]{3}\\))|([0-9]{3}))[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$`);

    const newP = document.createElement('p')

    newP.appendChild(
        document.createTextNode(
            `${regex.test(userInput.value) ? 'Valid' : 'Invalid'} US Number: ${userInput.value}`
        )
    )

    resultTextArea.appendChild(newP)

    userInput.value = ''
})

clearBtn.addEventListener('click', ()=>{
    resultTextArea.textContent = ''
})



