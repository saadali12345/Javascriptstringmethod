
function capitalizeFirstLetter(sentence) {
    let nameArr = sentence.split(' ');
    let result = [];

    for (let i = 0; i < nameArr.length; i++) {
        let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
        let lastLetter = nameArr[i].slice(1).toLowerCase();
        let completeLetter = firstLetter + lastLetter;
        result.push(completeLetter);
    }

    return result.join(' ');
}

let myName = prompt('Enter your name');
let capitalizedSentence = capitalizeFirstLetter(myName);
console.log(capitalizedSentence);