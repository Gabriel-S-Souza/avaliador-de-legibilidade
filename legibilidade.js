const textArea = document.querySelector('textarea')
const button = document.querySelector('button')
const saida = document.querySelector('output')
button.addEventListener("click", function() {
    const text = textArea.value
    saida.textContent = readabilityChecker(text)
})

function readabilityChecker(text) {
    let letters = 0
    let words = 1
    let phrases = 1
    if (text.length > 0) {
        for (let i = 0; i < text.length; i++) {
            if (isAlpha(text[i])){      
                letters++
                console.log(`Letters ${letters}`)
            }
            if (text[i] == " " && isAlpha(text[i + 1])) {
                words++
                console.log(`Words ${words}`)
            }
            if ((text[i] == "." || text[i] == "!" || text[i] == "?") && (isAlpha(text[i + 1]) || text[i + 1] == " ")) {
                phrases++
                console.log(`Phrases ${phrases}`)
            }
        }
    }
}

function isAlpha(char) {
    return typeof char === "string" && char.length === 1 && 
    (char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char === "ç" || char === "Ç")
}

// split() isto pode ser usado para subdividir o texto. 
// Posso usar o " " para dividir as palavras e conta-las.
