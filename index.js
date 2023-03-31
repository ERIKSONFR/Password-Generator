let results = document.getElementById('leftText')
let generateBtn = document.getElementById('generatePassword')
let copyClip = document.getElementById('copytoclipboard')

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// let numeroE = ''

generateBtn.addEventListener('click', function() {
    results.textContent = ""
    results.textContent += randomPasswordGenerator()

})

let passwordLimit = 15

function randomPasswordGenerator() {
    let newPass = ''
    for(let i = 0; i < passwordLimit; i++ ) {
        let randomNum = Math.floor( Math.random() * characters.length)
        newPass += characters[randomNum]
    }
    return newPass
}
