//Business Logic
function pigLatin(userWord) {
  let output = userWord;
  const vowelsString = "aeiou";
  if (vowelsString.includes(userWord[0])) {
    output += "way";
  } else if (userWord.slice(0, 2) == "qu") {
    output = userWord.slice(2) + "quay";
  } else {
    const charactersArray = userWord.split("");
    for (let index = 0; index < charactersArray.length; index += 1) {
      if (userWord.slice(index, index + 2) == "qu") {
        const firstPartOfWord = userWord.slice(0, index + 2);
        const restOfWord = userWord.slice(index + 2);
        output = restOfWord + firstPartOfWord + "ay";
        break;
      } else if (vowelsString.includes(charactersArray[index])) {
        output = userWord.slice(index) + userWord.slice(0, index) + "ay";
        break;
      }
    }   
  }
  return output;
}

function pigLatinPhrases(userPhrase) {
  const wordsArray = userPhrase.split(" ");
  const pigLatinArray = [];
  wordsArray.forEach((word) => pigLatinArray.push(pigLatin(word)));
  return pigLatinArray.join(" ");
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const outputPhrase = pigLatinPhrases(event.target.userInput.value.toLowerCase());
  document.getElementById("result").innerText = outputPhrase;
}

window.addEventListener("load", function() {
  document.getElementById("pigLatinForm").addEventListener("submit", handleFormSubmission);
})