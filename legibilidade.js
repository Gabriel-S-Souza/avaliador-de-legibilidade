const textArea = document.querySelector('textarea')
const button = document.querySelector('button')
const saida = document.querySelector('output')
button.addEventListener("click", function() {
    const text = textArea.value
    saida.textContent = readabilityChecker(text)
})

function readabilityChecker(text) {
    let secondCheck = false
    return "4° ano"
}



